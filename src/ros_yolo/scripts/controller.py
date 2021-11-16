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
        done = True
        twist.linear.x = 0.0 #정면방향속력,방향
        twist.angular.z = 0.1 #회전속력,방향
        while True and done:  
            if self.depth_label == "person":
                if self.depth_center_x == self.true_center_x:
                    twist.linear.x = 0.01
                    twist.angular.z = 0.0
                elif self.depth_center_x < self.true_center_x:
                    twist.linear.x = 0.01
                    twist.angular.z = 0.01
                elif self.depth_center_x > self.true_center_x:
                    twist.linear.x = 0.01
                    twist.angular.z = -0.01
            elif self.depth_label == "obstacle":
                if self.depth_center_x < 400.0 or self.depth_center_x > 880.0 :
                    pass
                else:
                    twist.linear.x = 0.01
                    if self.depth_center_x < self.true_center_x:
                        twist.angular.z = -0.1
                    else:
                        twist.angular.z = 0.1
            else:
                twist.linear.x = 0.0
                twist.angular.z = 0.1

            self.publisher.publish(twist)


if __name__=="__main__":
    rospy.init_node('yolo_controller')
    repeat = rospy.get_param("~repeat_rate", 0.0)
    pub_thread = PublishThread(repeat)
