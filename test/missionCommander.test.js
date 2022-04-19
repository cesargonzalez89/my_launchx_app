const MissionCommander = require('./../app/missionCommander');
//describe("Esto es una suite de pruebas", () => {
//    test('Caso de prueba 1', () => {
describe("Unit Tests for Mission Commander Class", () => {
    test('1) Create a mission commander objet', () => {
        const myMissionCommander = new MissionCommander("Woopa")
      //const result = 1 + 2 
      //expect(result).toBe(3);
      expect(myMissionCommander.name).toBe("Woopa");
    });
  })  