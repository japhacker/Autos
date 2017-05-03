(function () {
    'use strict';

    angular
        .module('app')
        .controller('PersonaController', PersonaController);

    PersonaController.inject = ['$scope', 'PersonaService', '$linq'];

    function PersonaController($scope, PersonaService, $linq) {
        var vm = this;

        vm.obj = PersonaService.getPersonasFn();

        vm.person = {};

        vm.addPerson = function () {

            vm.obj.Personas.push(vm.person);
            vm.person = null;
            console.log(vm.obj.Personas);

        };

        vm.personToAddCoche = null;

        vm.band = false;

        vm.band2 = false;
        vm.coche = null;
        vm.personToCoche = function (personToAddCoche) {
            vm.band = true;

            vm.coche = {};
            vm.coche.Id = vm.obj.Coches.length + 1;
            vm.coche.Id_Persona = personToAddCoche.Id;
            console.log(personToAddCoche);
        }


        vm.addCoche = function (personToAddCoche) {

            if (vm.coche != null) {
                vm.obj.Coches.push(vm.coche);
                vm.coche = null;

                console.log(vm.obj.Coches);
            }
        }
        vm.personaBuscar = null;
        vm.verCoches = function (persona) {
            vm.band2 = true;
            vm.personaBuscar = persona.Id_Persona;
        }


        vm.eliminarCoche = function (index) {
            console.log(index);
            vm.obj.Coches.splice(index, 1);

        }




        activate();


        function activate() {

            /* vm.queryResult = $linq.Enumerable().From(vm.Personas.Coches)
                 .Where(x => x.Marca == 'FORD')
                 .OrderBy(x => x.Id)
                 .Select(x => x.Modelo + ':' + x.Marca)
                 .ToArray();
             console.log("vm.queryResult : ", vm.queryResult);*/
            console.log(vm.obj);
            vm.person.Id = vm.obj.Personas.length + 1;

        }
    }
})();