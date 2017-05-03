(function () {
    'use strict';
    angular
        .module('app')
        .service('PersonaService', PersonaService);

    PersonaService.inject = [];

    function PersonaService() {
        this.getPersonasFn = getPersonasFn;

        var Obj = {
            "Personas": [{
                "Id": 1,
                "Nombre": "Alberto",
                "Apellido_Paterno": "Santiago",
                "Apellido_Materno": "Sánchez",
                "Fecha_de_Nacimiento": "20-09-1980",

            }],
            "Coches": [{
                "Id": 1,
                "Id_Persona": 1,
                "Marca": "CHEVROLET",
                "Modelo": "Aveo",
                "Anio": 2017,
                "Color": "Azule"
            }, {
                "Id": 2,
                "Id_Persona": 1,
                "Marca": "FORD",
                "Modelo": "Fiesta",
                "Anio": 2017,
                "Color": "Pink"
            }]

        };





        function getPersonasFn() {
            var Personas = Obj;
            return Personas;
        }



    }
})();