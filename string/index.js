const string = {
    capitalize: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    ucwords: function(str) {
        str = str.toLowerCase();
        return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
        function(s){
          return s.toUpperCase();
        });
    },
    slugify: function(str) {
        return str.split(' ').map(function(s) {
            return s.charAt(0).toLowerCase() + s.slice(1);
        }).join('_');
    }
    deslugify: function(str) {
        return str.split('_').map(function(s) {
            return s.charAt(0).toUpperCase() + s.slice(1);
        }).join(' ');
    },
    descape: function(str) {
        return str.replace(/&lt;/g, '<').replace(/&gt;/g, '<');
    },
    excerpt: function(text) {

    }
}

module.exports = string;