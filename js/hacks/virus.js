class Virus {
    constructor() {
        this.message = "Niko wuz here";
    }

    change_message(message) {
        this.message = message;
    }

    invade() {
        console.log(this.messsage);
    }

    check_message() {
        return this.message;
    }
}