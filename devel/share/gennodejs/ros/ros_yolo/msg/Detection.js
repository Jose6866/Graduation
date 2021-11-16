// Auto-generated. Do not edit!

// (in-package ros_yolo.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class Detection {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.detection_x = null;
      this.detection_y = null;
      this.detection_w = null;
      this.detection_h = null;
      this.detection_label = null;
      this.detection_conf = null;
      this.detection_center_x = null;
      this.detection_center_y = null;
    }
    else {
      if (initObj.hasOwnProperty('detection_x')) {
        this.detection_x = initObj.detection_x
      }
      else {
        this.detection_x = 0.0;
      }
      if (initObj.hasOwnProperty('detection_y')) {
        this.detection_y = initObj.detection_y
      }
      else {
        this.detection_y = 0.0;
      }
      if (initObj.hasOwnProperty('detection_w')) {
        this.detection_w = initObj.detection_w
      }
      else {
        this.detection_w = 0.0;
      }
      if (initObj.hasOwnProperty('detection_h')) {
        this.detection_h = initObj.detection_h
      }
      else {
        this.detection_h = 0.0;
      }
      if (initObj.hasOwnProperty('detection_label')) {
        this.detection_label = initObj.detection_label
      }
      else {
        this.detection_label = '';
      }
      if (initObj.hasOwnProperty('detection_conf')) {
        this.detection_conf = initObj.detection_conf
      }
      else {
        this.detection_conf = 0.0;
      }
      if (initObj.hasOwnProperty('detection_center_x')) {
        this.detection_center_x = initObj.detection_center_x
      }
      else {
        this.detection_center_x = 0.0;
      }
      if (initObj.hasOwnProperty('detection_center_y')) {
        this.detection_center_y = initObj.detection_center_y
      }
      else {
        this.detection_center_y = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type Detection
    // Serialize message field [detection_x]
    bufferOffset = _serializer.float64(obj.detection_x, buffer, bufferOffset);
    // Serialize message field [detection_y]
    bufferOffset = _serializer.float64(obj.detection_y, buffer, bufferOffset);
    // Serialize message field [detection_w]
    bufferOffset = _serializer.float64(obj.detection_w, buffer, bufferOffset);
    // Serialize message field [detection_h]
    bufferOffset = _serializer.float64(obj.detection_h, buffer, bufferOffset);
    // Serialize message field [detection_label]
    bufferOffset = _serializer.string(obj.detection_label, buffer, bufferOffset);
    // Serialize message field [detection_conf]
    bufferOffset = _serializer.float64(obj.detection_conf, buffer, bufferOffset);
    // Serialize message field [detection_center_x]
    bufferOffset = _serializer.float64(obj.detection_center_x, buffer, bufferOffset);
    // Serialize message field [detection_center_y]
    bufferOffset = _serializer.float64(obj.detection_center_y, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type Detection
    let len;
    let data = new Detection(null);
    // Deserialize message field [detection_x]
    data.detection_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [detection_y]
    data.detection_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [detection_w]
    data.detection_w = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [detection_h]
    data.detection_h = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [detection_label]
    data.detection_label = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [detection_conf]
    data.detection_conf = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [detection_center_x]
    data.detection_center_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [detection_center_y]
    data.detection_center_y = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += object.detection_label.length;
    return length + 60;
  }

  static datatype() {
    // Returns string type for a message object
    return 'ros_yolo/Detection';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0f2734d1688547c417254d6da98c0715';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 detection_x
    float64 detection_y
    float64 detection_w
    float64 detection_h
    string detection_label
    float64 detection_conf
    float64 detection_center_x
    float64 detection_center_y
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new Detection(null);
    if (msg.detection_x !== undefined) {
      resolved.detection_x = msg.detection_x;
    }
    else {
      resolved.detection_x = 0.0
    }

    if (msg.detection_y !== undefined) {
      resolved.detection_y = msg.detection_y;
    }
    else {
      resolved.detection_y = 0.0
    }

    if (msg.detection_w !== undefined) {
      resolved.detection_w = msg.detection_w;
    }
    else {
      resolved.detection_w = 0.0
    }

    if (msg.detection_h !== undefined) {
      resolved.detection_h = msg.detection_h;
    }
    else {
      resolved.detection_h = 0.0
    }

    if (msg.detection_label !== undefined) {
      resolved.detection_label = msg.detection_label;
    }
    else {
      resolved.detection_label = ''
    }

    if (msg.detection_conf !== undefined) {
      resolved.detection_conf = msg.detection_conf;
    }
    else {
      resolved.detection_conf = 0.0
    }

    if (msg.detection_center_x !== undefined) {
      resolved.detection_center_x = msg.detection_center_x;
    }
    else {
      resolved.detection_center_x = 0.0
    }

    if (msg.detection_center_y !== undefined) {
      resolved.detection_center_y = msg.detection_center_y;
    }
    else {
      resolved.detection_center_y = 0.0
    }

    return resolved;
    }
};

module.exports = Detection;
