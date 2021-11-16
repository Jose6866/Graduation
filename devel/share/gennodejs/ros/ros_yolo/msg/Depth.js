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

class Depth {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.depth_x = null;
      this.depth_y = null;
      this.depth_w = null;
      this.depth_h = null;
      this.depth_label = null;
      this.depth_conf = null;
      this.depth_center_x = null;
      this.depth_center_y = null;
      this.depth_depth = null;
    }
    else {
      if (initObj.hasOwnProperty('depth_x')) {
        this.depth_x = initObj.depth_x
      }
      else {
        this.depth_x = 0.0;
      }
      if (initObj.hasOwnProperty('depth_y')) {
        this.depth_y = initObj.depth_y
      }
      else {
        this.depth_y = 0.0;
      }
      if (initObj.hasOwnProperty('depth_w')) {
        this.depth_w = initObj.depth_w
      }
      else {
        this.depth_w = 0.0;
      }
      if (initObj.hasOwnProperty('depth_h')) {
        this.depth_h = initObj.depth_h
      }
      else {
        this.depth_h = 0.0;
      }
      if (initObj.hasOwnProperty('depth_label')) {
        this.depth_label = initObj.depth_label
      }
      else {
        this.depth_label = '';
      }
      if (initObj.hasOwnProperty('depth_conf')) {
        this.depth_conf = initObj.depth_conf
      }
      else {
        this.depth_conf = 0.0;
      }
      if (initObj.hasOwnProperty('depth_center_x')) {
        this.depth_center_x = initObj.depth_center_x
      }
      else {
        this.depth_center_x = 0.0;
      }
      if (initObj.hasOwnProperty('depth_center_y')) {
        this.depth_center_y = initObj.depth_center_y
      }
      else {
        this.depth_center_y = 0.0;
      }
      if (initObj.hasOwnProperty('depth_depth')) {
        this.depth_depth = initObj.depth_depth
      }
      else {
        this.depth_depth = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type Depth
    // Serialize message field [depth_x]
    bufferOffset = _serializer.float64(obj.depth_x, buffer, bufferOffset);
    // Serialize message field [depth_y]
    bufferOffset = _serializer.float64(obj.depth_y, buffer, bufferOffset);
    // Serialize message field [depth_w]
    bufferOffset = _serializer.float64(obj.depth_w, buffer, bufferOffset);
    // Serialize message field [depth_h]
    bufferOffset = _serializer.float64(obj.depth_h, buffer, bufferOffset);
    // Serialize message field [depth_label]
    bufferOffset = _serializer.string(obj.depth_label, buffer, bufferOffset);
    // Serialize message field [depth_conf]
    bufferOffset = _serializer.float64(obj.depth_conf, buffer, bufferOffset);
    // Serialize message field [depth_center_x]
    bufferOffset = _serializer.float64(obj.depth_center_x, buffer, bufferOffset);
    // Serialize message field [depth_center_y]
    bufferOffset = _serializer.float64(obj.depth_center_y, buffer, bufferOffset);
    // Serialize message field [depth_depth]
    bufferOffset = _serializer.float64(obj.depth_depth, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type Depth
    let len;
    let data = new Depth(null);
    // Deserialize message field [depth_x]
    data.depth_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [depth_y]
    data.depth_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [depth_w]
    data.depth_w = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [depth_h]
    data.depth_h = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [depth_label]
    data.depth_label = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [depth_conf]
    data.depth_conf = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [depth_center_x]
    data.depth_center_x = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [depth_center_y]
    data.depth_center_y = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [depth_depth]
    data.depth_depth = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += object.depth_label.length;
    return length + 68;
  }

  static datatype() {
    // Returns string type for a message object
    return 'ros_yolo/Depth';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b4ede3d2c7cd4b8d21ed03ddcfba37e7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 depth_x
    float64 depth_y
    float64 depth_w
    float64 depth_h
    string depth_label
    float64 depth_conf
    float64 depth_center_x
    float64 depth_center_y
    float64 depth_depth
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new Depth(null);
    if (msg.depth_x !== undefined) {
      resolved.depth_x = msg.depth_x;
    }
    else {
      resolved.depth_x = 0.0
    }

    if (msg.depth_y !== undefined) {
      resolved.depth_y = msg.depth_y;
    }
    else {
      resolved.depth_y = 0.0
    }

    if (msg.depth_w !== undefined) {
      resolved.depth_w = msg.depth_w;
    }
    else {
      resolved.depth_w = 0.0
    }

    if (msg.depth_h !== undefined) {
      resolved.depth_h = msg.depth_h;
    }
    else {
      resolved.depth_h = 0.0
    }

    if (msg.depth_label !== undefined) {
      resolved.depth_label = msg.depth_label;
    }
    else {
      resolved.depth_label = ''
    }

    if (msg.depth_conf !== undefined) {
      resolved.depth_conf = msg.depth_conf;
    }
    else {
      resolved.depth_conf = 0.0
    }

    if (msg.depth_center_x !== undefined) {
      resolved.depth_center_x = msg.depth_center_x;
    }
    else {
      resolved.depth_center_x = 0.0
    }

    if (msg.depth_center_y !== undefined) {
      resolved.depth_center_y = msg.depth_center_y;
    }
    else {
      resolved.depth_center_y = 0.0
    }

    if (msg.depth_depth !== undefined) {
      resolved.depth_depth = msg.depth_depth;
    }
    else {
      resolved.depth_depth = 0.0
    }

    return resolved;
    }
};

module.exports = Depth;
