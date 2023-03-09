class Home {
    #count_class;
    constructor() {
        this.#count_class = 3;
    }
    getPrivate() {
        return this.#count_class++;
    }
}

class Comnata extends Home {
    constructor() {
        super()
        super.getPrivate();
    }
}