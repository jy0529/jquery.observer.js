;(function ($){
  var __listener = {}

  $.extend({
    subscribe: function (type, listerner) {
      if (__listener[type] !== undefined && __listener[type] instanceof Array) {
        __listener[type].push(listerner)
      } else {
        __listener[type] = [listerner]
      }
    },
    publish: function (type, data) {
      var event = {
        type: type,
        data: data
      }
      var i = 0
      var length = __listener[type].length
      if (__listener[type] !== undefined) {
        for(;i < length;i++) {
          __listener[type][i].call(this, event)
        }
      }
    },
    unSubscribe: function (type, listener) {
      var length = __listener[type].length
      var i = 0, index
      for(;i<length;i++) {
        if (__listener[type][i] === listener) {
          index = i
        }
      }
      index >=0 && __listener[type].splice(index, 1)
    }
  })
})(jQuery)
