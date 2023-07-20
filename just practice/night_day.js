var Body = {
    set_background_color: function(color){
        document.querySelector('body').style.backgroundColor = color;
    },
    set_color: function(color){
        document.querySelector('body').style.color = color;
    }
}
var Link = {
    set_color: function(color){
        var links = document.querySelectorAll('a');
        for(i in links)
            links[i].style.color = color;
    }
}
var Button = {
    set_value: function(value){
        var buttons = document.querySelectorAll('.nd');
        for(i in buttons)
            buttons[i].value = value;
    }
}

function night_day_handler(self){
    if(self.value === 'night'){
        Body.set_background_color('black');
        Body.set_color('white');
        Button.set_value(' day ');
        Link.set_color('skyblue');
    }
    else{
        Body.set_background_color('white');
        Body.set_color('black');
        Button.set_value('night');
        Link.set_color('blue');
    }
}