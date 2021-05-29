function userObject(params) {
    this.firstName = params;
    this.lastName = "Kushwaha";
}

var v = new userObject("Sonu");
alert(v.firstName);
alert(v.lastName);
