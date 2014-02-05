function Person(name, age, job){
    this.name = ko.observable(name);
    this.age = ko.observable(age);
    this.job = ko.observable(job);
}

function ViewModel(){
    var self = this;
    
    self.name = ko.observable();
    self.selectedItem = ko.observable();

    self.items = ko.observableArray([
        new Person("Max", 23, "Entwickler"),
        new Person("Jessica", 22, "Bankkauffrau"),
        new Person("Julia", 19, "Alternpflegerin"),
        new Person("Robert", 24, "Bankkaufmann"),
        new Person("Dennis", 27, "Mechantroniker")
    ]);
    
    self.itemsCount = ko.computed(function() {
        return self.items().length;
    });

    self.addItem = function () {
        var newPerson = new Person("<Name>", "<Alter>", "<Job>")
        self.items.push(newPerson);
        self.selectedItem(newPerson);
    };
}

window.viewModel = new ViewModel();
ko.applyBindings(window.viewModel);