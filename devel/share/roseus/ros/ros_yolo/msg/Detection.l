;; Auto-generated. Do not edit!


(when (boundp 'ros_yolo::Detection)
  (if (not (find-package "ROS_YOLO"))
    (make-package "ROS_YOLO"))
  (shadow 'Detection (find-package "ROS_YOLO")))
(unless (find-package "ROS_YOLO::DETECTION")
  (make-package "ROS_YOLO::DETECTION"))

(in-package "ROS")
;;//! \htmlinclude Detection.msg.html


(defclass ros_yolo::Detection
  :super ros::object
  :slots (_detection_x _detection_y _detection_w _detection_h _detection_label _detection_conf _detection_center_x _detection_center_y ))

(defmethod ros_yolo::Detection
  (:init
   (&key
    ((:detection_x __detection_x) 0.0)
    ((:detection_y __detection_y) 0.0)
    ((:detection_w __detection_w) 0.0)
    ((:detection_h __detection_h) 0.0)
    ((:detection_label __detection_label) "")
    ((:detection_conf __detection_conf) 0.0)
    ((:detection_center_x __detection_center_x) 0.0)
    ((:detection_center_y __detection_center_y) 0.0)
    )
   (send-super :init)
   (setq _detection_x (float __detection_x))
   (setq _detection_y (float __detection_y))
   (setq _detection_w (float __detection_w))
   (setq _detection_h (float __detection_h))
   (setq _detection_label (string __detection_label))
   (setq _detection_conf (float __detection_conf))
   (setq _detection_center_x (float __detection_center_x))
   (setq _detection_center_y (float __detection_center_y))
   self)
  (:detection_x
   (&optional __detection_x)
   (if __detection_x (setq _detection_x __detection_x)) _detection_x)
  (:detection_y
   (&optional __detection_y)
   (if __detection_y (setq _detection_y __detection_y)) _detection_y)
  (:detection_w
   (&optional __detection_w)
   (if __detection_w (setq _detection_w __detection_w)) _detection_w)
  (:detection_h
   (&optional __detection_h)
   (if __detection_h (setq _detection_h __detection_h)) _detection_h)
  (:detection_label
   (&optional __detection_label)
   (if __detection_label (setq _detection_label __detection_label)) _detection_label)
  (:detection_conf
   (&optional __detection_conf)
   (if __detection_conf (setq _detection_conf __detection_conf)) _detection_conf)
  (:detection_center_x
   (&optional __detection_center_x)
   (if __detection_center_x (setq _detection_center_x __detection_center_x)) _detection_center_x)
  (:detection_center_y
   (&optional __detection_center_y)
   (if __detection_center_y (setq _detection_center_y __detection_center_y)) _detection_center_y)
  (:serialization-length
   ()
   (+
    ;; float64 _detection_x
    8
    ;; float64 _detection_y
    8
    ;; float64 _detection_w
    8
    ;; float64 _detection_h
    8
    ;; string _detection_label
    4 (length _detection_label)
    ;; float64 _detection_conf
    8
    ;; float64 _detection_center_x
    8
    ;; float64 _detection_center_y
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float64 _detection_x
       (sys::poke _detection_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _detection_y
       (sys::poke _detection_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _detection_w
       (sys::poke _detection_w (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _detection_h
       (sys::poke _detection_h (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; string _detection_label
       (write-long (length _detection_label) s) (princ _detection_label s)
     ;; float64 _detection_conf
       (sys::poke _detection_conf (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _detection_center_x
       (sys::poke _detection_center_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _detection_center_y
       (sys::poke _detection_center_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float64 _detection_x
     (setq _detection_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _detection_y
     (setq _detection_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _detection_w
     (setq _detection_w (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _detection_h
     (setq _detection_h (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; string _detection_label
     (let (n) (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4) (setq _detection_label (subseq buf ptr- (+ ptr- n))) (incf ptr- n))
   ;; float64 _detection_conf
     (setq _detection_conf (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _detection_center_x
     (setq _detection_center_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _detection_center_y
     (setq _detection_center_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get ros_yolo::Detection :md5sum-) "0f2734d1688547c417254d6da98c0715")
(setf (get ros_yolo::Detection :datatype-) "ros_yolo/Detection")
(setf (get ros_yolo::Detection :definition-)
      "float64 detection_x
float64 detection_y
float64 detection_w
float64 detection_h
string detection_label
float64 detection_conf
float64 detection_center_x
float64 detection_center_y

")



(provide :ros_yolo/Detection "0f2734d1688547c417254d6da98c0715")


