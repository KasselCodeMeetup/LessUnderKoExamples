var numbers = [ 3, 7, 2];

var employees = [
    {
        name: "Daniel",
        age: 18,
        department: "development"
    },
    {
        name: "Hans",
        age: 21,
        department: "marketing"
    },
    {
        name: "Lisa",
        age: 18,
        department: "marketing"
    },
]

var examples = {

    "Einfaches each": function () {
        
        _.each(numbers, function (n) {
            console.log(n);
        });
        
    },
    "Projektion mit Zahlen": function () {
        
        var projected = _.map(numbers, function (n) {
            return n * 3;
        })
        
        console.log(projected);
    },
    "Projektion mit Objekten": function () {
        
        var projected = _.map(employees, function (e) {
            return e.name;
        })
        
        console.log(projected);
    },
    "Aggregation von Werten": function () {
        
        var projected = _.reduce(employees, function (val, next) {
            val = val.age || val;
            return val + next.age;
        })
        
        console.log(projected);
    },
    "Finden eines Objekts in einem Array": function () {
        
        var employee = _.find(employees, function (e) {
            return e.name == "Daniel";
        })
        
        console.log(employee);
    },
    "Finden meherer Objekts in einem Array": function () {
        
        var res = _.filter(employees, function (e) {
            return e.age == 18;
        })
        
        console.log(res);
    },
    "Pruefen ob alle Elemente eine Bedingung erfuellen": function () {
        
        var res = _.every(employees, function (e) {
            return e.age == 18;
        })
        
        console.log(res);
    },
    "Pruefen ob ein Element eine Bedingung erfuellen": function () {
        
        var res = _.some(employees, function (e) {
            return e.age == 18;
        })
        
        console.log(res);
    },
    "Gruppieren anhand eines Schluessels": function () {
        
        var res = _.groupBy(employees, function (e) {
            return e.age;
        })
        
        console.log(res);
    },
    "Zusammenfuehren meherer Array per den Elementindex": function () {
        
        var res = _.zip(employees, numbers);
        
        console.log(res);
    }
}
