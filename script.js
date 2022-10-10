function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-*?/&$#",
        retVal = "";
        charset_number=[0,1,3,4,5,6,7,8,9],
        charset_string="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        charset_special="*?/&$#-_"
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));

         
    }
    return retVal;
}

