class PubSub{
  constructor(props){
    this.handlers = {};
    this.instance = undefined;
  }
  /**
   * 单例模式
   */
  static getInstance() {
    if (this.instance === undefined) {
      this.instance = new PubSub();
    }
    return this.instance;
  }
  /**
   * 订阅事件
   */
  on(eventType, handler) {
    //p判断事件名称是否在handler中，防止重复添加
    if (!(eventType in this.handlers)) {
      this.handlers[eventType] = [];
    }
    //将毁回调放到处理队列中
    this.handlers[eventType].push(handler);
    return this;
  }
  /** 
   * 触发事件(发布事件)
   */
  emit(eventType) {
    //取出传递过来的参数
    var handlerArgs = Array.prototype.slice.call(arguments, 1);
    //循环执行对应事件的处理函数
    for (var i = 0; i < this.handlers[eventType].length; i++) {
      this.handlers[eventType][i].apply(this, handlerArgs);
    }
    return this;
  }
  /**
   * 删除订阅事件
   */
  off(eventType, handler) {
    var currentEvent = this.handlers[eventType];
    var len = 0;
    if (currentEvent) {
      len = currentEvent.length;
      for (var i = len - 1; i >= 0; i--) {
        if (currentEvent[i] === handler) {
          currentEvent.splice(i, 1);
        }
      }
    }
    return this;
  }
}

export default PubSub.getInstance();