class SmartDevice {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    charging() {
        console.log("I am charging");
    }
}

class SmartPhone extends SmartDevice {
    constructor(brand, model, storage, camera) {
        super(brand, model);
        this.storage = storage;
        this.camera = camera;
    }
}

class SmartWatch extends SmartDevice {
    constructor(brand, model, storage, isWaterProof) {
        super(brand, model);
        this.storage = storage;
        this.isWaterProof = isWaterProof;
    }
}

const smartWatch = new SmartWatch('Huawei', 'w32', '2 GB', true);
console.log(smartWatch);
smartWatch.charging();