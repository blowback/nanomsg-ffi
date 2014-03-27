var FFI = require('ffi'),
    ArrayType = require('ref-array'),
    Struct = require('ref-struct'),
    ref = require('ref');

var voidPtr = ref.refType(ref.types.void);

var _nn_proto_pair =     1,
    _nn_proto_pubsub =   2,
    _nn_proto_reqrep =   3,
    _nn_proto_pipeline = 5,
    _nn_proto_survey   = 6,
    _nn_proto_bus =      7,
    _nn_inproc =         -1,
    _nn_ipc =            -2,
    _nn_ipc =            -3;

exports.CONSTANTS = {
    NN_PROTO_PAIR:          _nn_proto_pair,
    NN_PROTO_PUBSUB:        _nn_proto_pubsub,
    NN_PROTO_REQREP:        _nn_proto_reqrep,
    NN_PROTO_PIPELINE:      _nn_proto_pipeline,
    NN_PROTO_SURVEY:        _nn_proto_survey,
    NN_PROTO_BUS:           _nn_proto_bus,

    NN_PAIR:                (_nn_proto_pair * 16 + 0),
    NN_PUB:                 (_nn_proto_pubsub * 16 + 0),
    NN_SUB:                 (_nn_proto_pubsub * 16 + 1),
    NN_REQ:                 (_nn_proto_reqrep * 16 + 0),
    NN_REP:                 (_nn_proto_reqrep * 16 + 1),
    NN_PUSH:                (_nn_proto_pipeline * 16 + 0),
    NN_PULL:                (_nn_proto_pipeline * 16 + 1),
    NN_SURVEYOR:            (_nn_proto_survey * 16 + 0),
    NN_RESPONDENT:          (_nn_proto_survey * 16 + 1),
    NN_BUS:                 (_nn_proto_bus * 16 + 0),

    NN_SUB_SUBSCRIBE:       1,
    NN_SUB_UNSUBSCRIBE:     2,
    NN_REQ_RESEND_IVL:      1,

    NN_INPROC:              -1,
    NN_IPC:                 -2,
    NN_TCP:                 -3,

    NN_TCP_NODELAY:         1,


    NN_VERSION_CURRENT:     1,
    NN_VERSION_REVISION:    0,
    NN_VERSION_AGE:         1,

    NN_NS_NAMESPACE:        0,
    NN_NS_VERSION:          1,
    NN_NS_DOMAIN:           2,
    NN_NS_TRANSPORT:        3,
    NN_NS_PROTOCOL:         4,
    NN_NS_OPTION_LEVEL:     5,
    NN_NS_SOCKET_OPTION:    6,
    NN_NS_TRANSPORT_OPTION: 7,
    NN_NS_OPTION_TYPE:      8,
    NN_NS_OPTION_UNIT:      9,
    NN_NS_FLAG:             10,
    NN_NS_ERROR:            11,
    NN_NS_LIMIT:            12,

    NN_TYPE_NONE:           0,
    NN_TYPE_INT:            1,
    NN_TYPE_STR:            2,

    NN_UNIT_NONE:           0,
    NN_UNIT_BYTES:          1,
    NN_UNIT_MILLISECONDS:   2,
    NN_UNIT_PRIORITY:       3,
    NN_UNIT_BOOLEAN:        4,

};

var size_t = exports.size_t = voidPtr;
var size_tPtr = exports.size_tPtr = ref.refType(size_t);

exports.libnanomsg = new FFI.Library('libnanomsg', {
  __errno_location: [ref.refType(ref.types.int32), [
  ]],
  nn_errno: [ref.types.int32, [
  ]],
  nn_strerror: [ref.types.CString, [
    ref.types.int32,
  ]],
  nn_symbol: [ref.types.CString, [
    ref.types.int32,
    ref.refType(ref.types.int32),
  ]],
  nn_symbol_info: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
    ref.types.int32,
  ]],
  nn_term: [ref.types.void, [
  ]],
  nn_allocmsg: [voidPtr, [
    ref.types.ulong,
    ref.types.int32,
  ]],
  nn_freemsg: [ref.types.int32, [
    voidPtr,
  ]],
  nn_cmsg_nexthdr_: [voidPtr, [
    voidPtr,
    voidPtr,
  ]],
  nn_socket: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
  ]],
  nn_close: [ref.types.int32, [
    ref.types.int32,
  ]],
  nn_setsockopt: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    voidPtr,
    ref.types.ulong,
  ]],
  nn_getsockopt: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
    ref.types.int32,
    voidPtr,
    size_t,
  ]],
  nn_bind: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
  ]],
  nn_connect: [ref.types.int32, [
    ref.types.int32,
    ref.types.CString,
  ]],
  nn_shutdown: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
  ]],
  nn_send: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
    ref.types.ulong,
    ref.types.int32,
  ]],
  nn_recv: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
    ref.types.ulong,
    ref.types.int32,
  ]],
  nn_sendmsg: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
    ref.types.int32,
  ]],
  nn_recvmsg: [ref.types.int32, [
    ref.types.int32,
    voidPtr,
    ref.types.int32,
  ]],
  nn_poll: [ref.types.int32, [
    voidPtr,
    ref.types.int32,
    ref.types.int32,
  ]],
  nn_device: [ref.types.int32, [
    ref.types.int32,
    ref.types.int32,
  ]],
});

