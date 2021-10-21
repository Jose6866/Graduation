#!/usr/bin/env python3

from __future__ import print_function
import os
from ros_yolo.msg import Depth

import threading
import rospy
from geometry_msgs.msg import Twist
import sys, select, termios, tty


class PublishThread(threading.Thread):
    def __init__(self, rate):
        super(PublishThread, self).__init__()

        self.initialize_subscriber()

        self.publisher = rospy.Publisher('cmd_vel', Twist, queue_size = 1)

        self.depth_x = 0.0
        self.depth_y = 0.0
        self.depth_w = 0.0
        self.depth_h = 0.0
        self.depth_label = ''
        self.depth_conf = 0.0
        self.depth_center_x = 0.0
        self.depth_center_y = 0.0
        self.depth_depth = 0.0

        self.true_center_x = 640.0

        self.start()

    def initialize_subscriber(self):
        rospy.Subscriber("Depth", Depth , self.callback_depth_x)
        rospy.Subscriber("Depth", Depth , self.callback_depth_y)
        rospy.Subscriber("Depth", Depth , self.callback_depth_w)
        rospy.Subscriber("Depth", Depth , self.callback_depth_h)
        rospy.Subscriber("Depth", Depth , self.callback_depth_label)
        rospy.Subscriber("Depth", Depth , self.callback_depth_conf)
        rospy.Subscriber("Depth", Depth , self.callback_depth_center_x)
        rospy.Subscriber("Depth", Depth , self.callback_depth_center_y)
        rospy.Subscriber("Depth", Depth , self.callback_depth_depth)

    def callback_depth_x(self, data):
        self.depth_x = data.depth_x

    def callback_depth_y(self, data):
        self.depth_y = data.depth_y

    def callback_depth_w(self, data):
        self.depth_w = data.depth_w

    def callback_depth_h(self, data):
        self.depth_h = data.depth_h

    def callback_depth_label(self, data):
        self.depth_label = data.depth_label

    def callback_depth_conf(self, data):
        self.depth_conf = data.depth_conf

    def callback_depth_center_x(self, data):
        self.depth_center_x = data.depth_center_x

    def callback_depth_center_y(self, data):
        self.depth_center_y = data.depth_center_y

    def callback_depth_depth(self, data):
        self.depth_depth = data.depth_depth

    def run(self):
        twist = Twist()
        check = True
        while True and check:  #person을 방향으로 정
            twist.linear.x = 0.01
            twist.linear.z = 0.05
            twist.angular.z = 0.05

            if self.depth_label == 'Person':
                if self.depth_center_x == self.true_center_x:
                    twist.linear.z = 0.0
                    twist.angular.z = 0.0
                    check = False
            self.publisher.publish(twist)


#        while True:
#            # Wait for a new message or timeout.
#            twist.linear.x = 0.01
#            twist.linear.z = 0.01
#            twist.angular.z = 0.05

#            if self.detection_center_x > self.true_center_x : # center보다 오른쪽에 있으면 뒤로
#                twist.angular.z = -0.05
#                print('%s is on right' % self.detection_label, end='\n')
#            elif self.detection_center_x < self.true_center_x : #center보다 왼쪽에 있으면 앞으로
#                twist.angular.z = 0.05
#                print('%s is on left' % self.detection_label, end='\n')
#            else:
#                twist.angular.z = 0.00

            # Publish.
            self.publisher.publish(twist)

if __name__=="__main__":
    rospy.init_node('yolo_controller')
    repeat = rospy.get_param("~repeat_rate", 0.0)
    pub_thread = PublishThread(repeat)
