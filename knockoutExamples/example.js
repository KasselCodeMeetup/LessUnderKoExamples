function ViewModel(){
    var self = this;
    
    self.name = ko.observable();
    self.items = ko.observableArray();
    self.selectedItem = ko.observable();
    self.itemsCount = ko.computed(function() {
        return self.items().length;
    });

    self.addItem = function () {
        self.items.push({
            name: Math.random() > 0.5 ? "Reichard" : "Heinz",
            number: Math.floor(Math.random() * 10000000)
        });
    };
}

window.viewModel = new ViewModel();
ko.applyBindings(window.viewModel);