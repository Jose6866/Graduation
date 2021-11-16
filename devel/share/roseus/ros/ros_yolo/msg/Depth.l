;; Auto-generated. Do not edit!


(when (boundp 'ros_yolo::Depth)
  (if (not (find-package "ROS_YOLO"))
    (make-package "ROS_YOLO"))
  (shadow 'Depth (find-package "ROS_YOLO")))
(unless (find-package "ROS_YOLO::DEPTH")
  (make-package "ROS_YOLO::DEPTH"))

(in-package "ROS")
;;//! \htmlinclude Depth.msg.html


(defclass ros_yolo::Depth
  :super ros::object
  :slots (_depth_x _depth_y _depth_w _depth_h _depth_label _depth_conf _depth_center_x _depth_center_y _depth_depth ))

(defmethod ros_yolo::Depth
  (:init
   (&key
    ((:depth_x __depth_x) 0.0)
    ((:depth_y __depth_y) 0.0)
    ((:depth_w __depth_w) 0.0)
    ((:depth_h __depth_h) 0.0)
    ((:depth_label __depth_label) "")
    ((:depth_conf __depth_conf) 0.0)
    ((:depth_center_x __depth_center_x) 0.0)
    ((:depth_center_y __depth_center_y) 0.0)
    ((:depth_depth __depth_depth) 0.0)
    )
   (send-super :init)
   (setq _depth_x (float __depth_x))
   (setq _depth_y (float __depth_y))
   (setq _depth_w (float __depth_w))
   (setq _depth_h (float __depth_h))
   (setq _depth_label (string __depth_label))
   (setq _depth_conf (float __depth_conf))
   (setq _depth_center_x (float __depth_center_x))
   (setq _depth_center_y (float __depth_center_y))
   (setq _depth_depth (float __depth_depth))
   self)
  (:depth_x
   (&optional __depth_x)
   (if __depth_x (setq _depth_x __depth_x)) _depth_x)
  (:depth_y
   (&optional __depth_y)
   (if __depth_y (setq _depth_y __depth_y)) _depth_y)
  (:depth_w
   (&optional __depth_w)
   (if __depth_w (setq _depth_w __depth_w)) _depth_w)
  (:depth_h
   (&optional __depth_h)
   (if __depth_h (setq _depth_h __depth_h)) _depth_h)
  (:depth_label
   (&optional __depth_label)
   (if __depth_label (setq _depth_label __depth_label)) _depth_label)
  (:depth_conf
   (&optional __depth_conf)
   (if __depth_conf (setq _depth_conf __depth_conf)) _depth_conf)
  (:depth_center_x
   (&optional __depth_center_x)
   (if __depth_center_x (setq _depth_center_x __depth_center_x)) _depth_center_x)
  (:depth_center_y
   (&optional __depth_center_y)
   (if __depth_center_y (setq _depth_center_y __depth_center_y)) _depth_center_y)
  (:depth_depth
   (&optional __depth_depth)
   (if __depth_depth (setq _depth_depth __depth_depth)) _depth_depth)
  (:serialization-length
   ()
   (+
    ;; float64 _depth_x
    8
    ;; float64 _depth_y
    8
    ;; float64 _depth_w
    8
    ;; float64 _depth_h
    8
    ;; string _depth_label
    4 (length _depth_label)
    ;; float64 _depth_conf
    8
    ;; float64 _depth_center_x
    8
    ;; float64 _depth_center_y
    8
    ;; float64 _depth_depth
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float64 _depth_x
       (sys::poke _depth_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _depth_y
       (sys::poke _depth_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _depth_w
       (sys::poke _depth_w (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _depth_h
       (sys::poke _depth_h (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; string _depth_label
       (write-long (length _depth_label) s) (princ _depth_label s)
     ;; float64 _depth_conf
       (sys::poke _depth_conf (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _depth_center_x
       (sys::poke _depth_center_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _depth_center_y
       (sys::poke _depth_center_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _depth_depth
       (sys::poke _depth_depth (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float64 _depth_x
     (setq _depth_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _depth_y
     (setq _depth_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _depth_w
     (setq _depth_w (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _depth_h
     (setq _depth_h (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; string _depth_label
     (let (n) (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4) (setq _depth_label (subseq buf ptr- (+ ptr- n))) (incf ptr- n))
   ;; float64 _depth_conf
     (setq _depth_conf (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _depth_center_x
     (setq _depth_center_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _depth_center_y
     (setq _depth_center_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _depth_depth
     (setq _depth_depth (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get ros_yolo::Depth :md5sum-) "b4ede3d2c7cd4b8d21ed03ddcfba37e7")
(setf (get ros_yolo::Depth :datatype-) "ros_yolo/Depth")
(setf (get ros_yolo::Depth :definition-)
      "float64 depth_x
float64 depth_y
float64 depth_w
float64 depth_h
string depth_label
float64 depth_conf
float64 depth_center_x
float64 depth_center_y
float64 depth_depth

")



(provide :ros_yolo/Depth "b4ede3d2c7cd4b8d21ed03ddcfba37e7")


