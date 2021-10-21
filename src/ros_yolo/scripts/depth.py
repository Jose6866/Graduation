#!/usr/bin/env python

from __future__ import print_function

import rospy
import numpy as np
import threading
from cv_bridge import CvBridge, CvBridgeError
from ros_yolo.msg import Detection, Depth
from sensor_msgs.msg import Image


import os
import select, termios, tty
import sys
sys.path.remove('/opt/ros/kinetic/lib/python2.7/dist-packages')


class PublishThread(threading.Thread):
    def __init__(self, rate):
        super(PublishThread, self).__init__()

        self.initialize_subscriber()

        self.publisher = rospy.Publisher('Depth', Depth, queue_size = 1)

        self.detection_x = 0.0
        self.detection_y = 0.0
        self.detection_w = 0.0
        self.detection_h = 0.0
        self.detection_label = ''
        self.detection_conf = 0.0
        self.detection_center_x = 0.0
        self.detection_center_y = 0.0

        self.depth = np.array(())

        self.start()

    def initialize_subscriber(self):
        rospy.Subscriber("Detection", Detection , self.callback_detection_x, queue_size=1)
        rospy.Subscriber("Detection", Detection , self.callback_detection_y, queue_size=1)
        rospy.Subscriber("Detection", Detection , self.callback_detection_w, queue_size=1)
        rospy.Subscriber("Detection", Detection , self.callback_detection_h, queue_size=1)
        rospy.Subscriber("Detection", Detection , self.callback_detection_label, queue_size=1)
        rospy.Subscriber("Detection", Detection , self.callback_detection_conf, queue_size=1)
        rospy.Subscriber("Detection", Detection , self.callback_detection_center_x, queue_size=1)
        rospy.Subscriber("Detection", Detection , self.callback_detection_center_y, queue_size=1)
        rospy.Subscriber("/camera/aligned_depth_to_color/image_raw", Image, self.callback_convert_depth_image, queue_size=1)

    def callback_detection_x(self, data):
        self.detection_x = data.detection_x

    def callback_detection_y(self, data):
        self.detection_y = data.detection_y

    def callback_detection_w(self, data):
        self.detection_w = data.detection_w

    def callback_detection_h(self, data):
        self.detection_h = data.detection_h

    def callback_detection_label(self, data):
        self.detection_label = data.detection_label

    def callback_detection_conf(self, data):
        self.detection_conf = data.detection_conf

    def callback_detection_center_x(self, data):
        self.detection_center_x = data.detection_center_x

    def callback_detection_center_y(self, data):
        self.detection_center_y = data.detection_center_y

    def callback_convert_depth_image(self, ros_image):
        bridge = CvBridge()
        #Convert the depth image using the default passthrough encoding
        depth_image = bridge.imgmsg_to_cv2(ros_image, desired_encoding="passthrough")
        depth_array = np.array(depth_image, dtype=np.float32)
        center_idx = np.array((int(self.detection_center_y), int(self.detection_center_x)))
        self.depth = depth_array[center_idx[0], center_idx[1]]

    def run(self):
        depth0 = Depth()

        while True:
            depth0.depth_x = self.detection_x
            depth0.depth_y = self.detection_y
            depth0.depth_w = self.detection_w
            depth0.depth_h = self.detection_h
            depth0.depth_label = self.detection_label
            depth0.depth_conf = self.detection_conf
            depth0.depth_center_x = self.detection_center_x
            depth0.depth_center_y = self.detection_center_y
            depth0.depth_depth = self.depth

            # Publish.
            self.publisher.publish(depth0)


if __name__=="__main__":
    rospy.init_node('depth')
    repeat = rospy.get_param("~repeat_rate", 0.0)
    pub_thread = PublishThread(repeat)
