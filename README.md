# Jquery.observer.js
### A Simple Pub/Sub pulign for Jquery

### Getting
- [DownLoad release](https://github.com/sunyuanSoftware/jquery.observer.js/tags) from github

### API
- **add a Subscriber**
```javascript
function update(e) {
  // pass the parameter, can get a object which have subscribe's type and data 
  console.log('update', e)
}
$.subscribe('update', update)
```
- **publish a event**
```javascript
$.publish('update', {data: {name: 'Jy'}})
```
- **unSubscribe**
```javascript
$.unSubscribe('update', update)
```

### Example
```javascript
  <script src="jquery.min.js"></script>
  <script src="../jquery.observer.js"></script>
  <script>
    (function () {
      /**
       * add comment
       */
      var btn = document.querySelector('.add-comment-btn')
      btn.addEventListener('click', function () {
        var text = document.querySelector('.comment-box-content').value
        var li = document.createElement('li')
        li.innerHTML = text
        document.querySelector('.comments').appendChild(li)
        // publish a update event
        $.publish('updateCommentNumber', {num: 1})
      })

    })()
  </script>
  <script>
    (function () {
      /**
       *  now you have a new task which is to change the comment-numbers 
       */
       function updateCommentNumber(e) {
         var el = document.querySelector('.comment-numbers')
         var number = +el.innerText
         el.innerText = number + e.data.num
       }
       $.subscribe('updateCommentNumber', updateCommentNumber)
    })()
  </script>
```
[see demo](https://github.com/sunyuanSoftware/jquery.observer.js/blob/master/test/index.html)

### Lisence
MIT: [MIT Lisence](https://github.com/sunyuanSoftware/jquery.observer.js/blob/master/License)
