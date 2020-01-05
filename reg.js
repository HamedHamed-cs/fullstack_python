    function student(name, pw, username, gender, city, address) {
        this.name = name
        this.pw = pw
        this.username = username
        this.gender = gender
        this.city = city
        this.address = address
    }
    var arrStudent = []

    localStorage.setItem("students", arrStudent);