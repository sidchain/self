window.onload = function() {
  var firebaseConfig = {
    apiKey: &quot;AIzaSyBowiLmHKgsggxudU-J-MaRY0M0c6Dg4HQ&quot;,
    authDomain: &quot;errors-22c10.firebaseapp.com&quot;,
    projectId: &quot;errors-22c10&quot;,
    storageBucket: &quot;errors-22c10.appspot.com&quot;,
    messagingSenderId: &quot;95434895291&quot;,
    appId: &quot;1:95434895291:web:ca21b7dd11d19f95079e9e&quot;,
  };
  firebase.initializeApp(firebaseConfig);
  var db = firebase.database()

  class chatDevanka{
    home(){
      document.body.innerHTML = &#39;&#39;
      this.create_title()
      this.create_join_form()
    }
    chat(){
      this.create_title()
      this.create_chat()
    }
    create_title(){
      var title_container = document.createElement(&#39;div&#39;)
      title_container.setAttribute(&#39;id&#39;, &#39;title_container&#39;)
      var title_inner_container = document.createElement(&#39;div&#39;)
      title_inner_container.setAttribute(&#39;id&#39;, &#39;title_inner_container&#39;)

      var title = document.createElement(&#39;h1&#39;)
      title.setAttribute(&#39;id&#39;, &#39;title&#39;)
      title.textContent = &#39;DEVANKA CHAT&#39;

      title_inner_container.append(title)
      title_container.append(title_inner_container)
      document.body.append(title_container)
    }
    create_join_form(){
      var parent = this;

      var join_container = document.createElement(&#39;div&#39;)
      join_container.setAttribute(&#39;id&#39;, &#39;join_container&#39;)
      var join_inner_container = document.createElement(&#39;div&#39;)
      join_inner_container.setAttribute(&#39;id&#39;, &#39;join_inner_container&#39;)

      var join_button_container = document.createElement(&#39;div&#39;)
      join_button_container.setAttribute(&#39;id&#39;, &#39;join_button_container&#39;)

      var join_button = document.createElement(&#39;button&#39;)
      join_button.setAttribute(&#39;id&#39;, &#39;join_button&#39;)
      join_button.innerHTML = &#39;Masuk&#39;

      var join_input_container = document.createElement(&#39;div&#39;)
      join_input_container.setAttribute(&#39;id&#39;, &#39;join_input_container&#39;)

      var join_input = document.createElement(&#39;input&#39;)
      join_input.setAttribute(&#39;id&#39;, &#39;join_input&#39;)
      join_input.setAttribute(&#39;maxlength&#39;, 15)
      join_input.placeholder = &#39;Siapa nama kamu?&#39;
      join_input.onkeyup  = function(){
        if(join_input.value.length &gt; 0){
          join_button.classList.add(&#39;enabled&#39;)
          join_button.onclick = function(){
            parent.save_name(join_input.value)
            join_container.remove()
            parent.create_chat()
          }
        }else{
          join_button.classList.remove(&#39;enabled&#39;)
        }
      }

      join_button_container.append(join_button)
      join_input_container.append(join_input)
      join_inner_container.append(join_input_container, join_button_container)
      join_container.append(join_inner_container)
      document.body.append(join_container)
    }
    create_load(id){
      var parent = this;
      var container = document.getElementById(id)
      container.innerHTML = &#39;&#39;

      var loader_container = document.createElement(&#39;div&#39;)
      loader_container.setAttribute(&#39;class&#39;, &#39;loader_container&#39;)

      var loader = document.createElement(&#39;div&#39;)
      loader.setAttribute(&#39;class&#39;, &#39;loader&#39;)

      loader_container.append(loader)
      container.append(loader_container)

    }
    create_chat(){
      var parent = this;
      var title_container = document.getElementById(&#39;title_container&#39;)
      var title = document.getElementById(&#39;title&#39;)
      title_container.classList.add(&#39;chat_title_container&#39;)
      title.classList.add(&#39;chat_title&#39;)

      var chat_container = document.createElement(&#39;div&#39;)
      chat_container.setAttribute(&#39;id&#39;, &#39;chat_container&#39;)

      var chat_inner_container = document.createElement(&#39;div&#39;)
      chat_inner_container.setAttribute(&#39;id&#39;, &#39;chat_inner_container&#39;)

      var chat_content_container = document.createElement(&#39;div&#39;)
      chat_content_container.setAttribute(&#39;id&#39;, &#39;chat_content_container&#39;)

      var chat_input_container = document.createElement(&#39;div&#39;)
      chat_input_container.setAttribute(&#39;id&#39;, &#39;chat_input_container&#39;)

      var chat_input_send = document.createElement(&#39;button&#39;)
      chat_input_send.setAttribute(&#39;id&#39;, &#39;chat_input_send&#39;)
      chat_input_send.setAttribute(&#39;disabled&#39;, true)
      chat_input_send.innerHTML = `&gt;&gt;`

      var chat_input = document.createElement(&#39;input&#39;)
      chat_input.setAttribute(&#39;id&#39;, &#39;chat_input&#39;)
      chat_input.setAttribute(&#39;maxlength&#39;, 1000)
      chat_input.placeholder = `Tulis Pesan..`
      chat_input.onkeyup  = function(){
        if(chat_input.value.length &gt; 0){
          chat_input_send.removeAttribute(&#39;disabled&#39;)
          chat_input_send.classList.add(&#39;enabled&#39;)
          chat_input_send.onclick = function(){
            chat_input_send.setAttribute(&#39;disabled&#39;, true)
            chat_input_send.classList.remove(&#39;enabled&#39;)
            if(chat_input.value.length &lt;= 0){
              return
            }
            parent.create_load(&#39;chat_content_container&#39;)
            parent.send_message(chat_input.value)
            chat_input.value = &#39;&#39;
            chat_input.focus()
          }
        }else{
          chat_input_send.classList.remove(&#39;enabled&#39;)
        }
      }

      var chat_logout_container = document.createElement(&#39;div&#39;)
      chat_logout_container.setAttribute(&#39;id&#39;, &#39;chat_logout_container&#39;)

      var chat_logout = document.createElement(&#39;button&#39;)
      chat_logout.setAttribute(&#39;id&#39;, &#39;chat_logout&#39;)
      chat_logout.textContent = `Keluar`
      chat_logout.onclick = function(){
        localStorage.clear()
        parent.home()
      }

      chat_logout_container.append(chat_logout)
      chat_input_container.append(chat_input, chat_input_send)
      chat_inner_container.append(chat_content_container, chat_input_container, chat_logout_container)
      chat_container.append(chat_inner_container)
      document.body.append(chat_container)
      parent.create_load(&#39;chat_content_container&#39;)
      this.refresh_chat()
    }
    save_name(name){
      localStorage.setItem(&#39;name&#39;, name)
    }
    send_message(message){
      var parent = this
      if(parent.get_name() == null &amp;&amp; message == null){
        return
      }

      var messages = db.ref(&#39;chats/&#39;);
      messages.once(&#39;value&#39;, function(snapshot) {
        var index = parseFloat(snapshot.numChildren()) + 1
        db.ref(&#39;chats/&#39; + `message_${index}`).set({
          name: parent.get_name(),
          message: message,
          index: index
        })
        .then(function(){
          parent.refresh_chat()
        })
      })
    }
    get_name(){
      if(localStorage.getItem(&#39;name&#39;) != null){
        return localStorage.getItem(&#39;name&#39;)
      }else{
        this.home()
      }
    }
    refresh_chat(){
      var chat_content_container = document.getElementById(&#39;chat_content_container&#39;)

      var messages = db.ref(&#39;chats/&#39;);
      messages.on(&#39;value&#39;, function(snapshot) {
        chat_content_container.innerHTML = &#39;&#39;
        if(snapshot.numChildren() == 0){
          return
        }
        var values = Object.values(snapshot.val());
        var guide = []
        var unordered = []
        var ordered = []
        for (var i, i = 0; i &lt; values.length; i++) {
          guide.push(i+1)
          unordered.push([values[i], values[i].index]);
        }

        guide.forEach(function(key) {
          var found = false
          unordered = unordered.filter(function(item) {
            if(!found &amp;&amp; item[1] == key) {
              ordered.push(item[0])
              found = true
              return false
            }else{
              return true
            }
          })
        })

        ordered.forEach(function(data) {
          var name = data.name
          var message = data.message

          var message_container = document.createElement(&#39;div&#39;)
          message_container.setAttribute(&#39;class&#39;, &#39;message_container&#39;)

          var message_inner_container = document.createElement(&#39;div&#39;)
          message_inner_container.setAttribute(&#39;class&#39;, &#39;message_inner_container&#39;)

          var message_user_container = document.createElement(&#39;div&#39;)
          message_user_container.setAttribute(&#39;class&#39;, &#39;message_user_container&#39;)

          var message_user = document.createElement(&#39;p&#39;)
          message_user.setAttribute(&#39;class&#39;, &#39;message_user&#39;)
          message_user.textContent = `${name}`

          var message_content_container = document.createElement(&#39;div&#39;)
          message_content_container.setAttribute(&#39;class&#39;, &#39;message_content_container&#39;)

          var message_content = document.createElement(&#39;p&#39;)
          message_content.setAttribute(&#39;class&#39;, &#39;message_content&#39;)
          message_content.textContent = `${message}`

          message_user_container.append(message_user)
          message_content_container.append(message_content)
          message_inner_container.append(message_user_container, message_content_container)
          message_container.append(message_inner_container)

          chat_content_container.append(message_container)
        });
        chat_content_container.scrollTop = chat_content_container.scrollHeight;
      })
    }
  }

  app = new chatDevanka()
  if(localStorage.getItem(&#39;name&#39;) == null){
    app.home()
  }else{
    app.chat()
  }

}
