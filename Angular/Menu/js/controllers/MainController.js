app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: ' Bruschetta',
      description: 'Grilled bread, garlic, tomatoes, olive oil',
      price: 4.95
    }
    ];
    $scope.pizzas = [
    {
      name: 'Pepperoni',
      description: "The good ol' pepperoni pizza",
      price:14.95
    },
    {
      name: 'Pineapple',
      description: 'You may get some grief for ordering thins',
      price:14.95
      
    },
    {
      name: 'Cheese',
      description: "Can't beat the original, right?",
      price:14.95
      
    }
    
    ];
  $scope.sides = [
    {
      name: 'Breadsticks',
      description: 'Served with Marinara Sauce',
      price:4.95
    },
    {
      name: 'Soup of the Day',
      description: 'Take a Chance',
      price:4.95
      
    },
    {
      name: 'Salad',
      description: 'Really?, who likes salad?',
      price:4.95
      
    }
    
    ];

}]);