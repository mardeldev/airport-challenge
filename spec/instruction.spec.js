import Instruction from '../src/Instruction.js';

describe('User Story 1 Test:', () => {
    let testInstruction;

    describe('Instruction instantiation test:', () => {
        const mockPlane = {
            isLanded: () => true,
        }
        const mockAirport = {
            landPlane: () => mockPlane.isLanded(),
        }
        beforeEach(() => {
            testInstruction = new Instruction("testInstruction", mockAirport, mockPlane);
        })
        afterEach(() => {
            testInstruction = undefined;
        })
        it('1a. should call the airport\'s landPlane method', () => {
            // Arrange -> testInstruction done in beforeEach
            const mockAirportSpy = spyOn(mockAirport, 'landPlane');
            // Act
            testInstruction.landPlane();
            // Assert
            expect(mockAirportSpy).toHaveBeenCalled();
        })
        it('1b. should call the plane\'s isLanded method', () => {
            // Arrange -> testInstruction done in beforeEach
            const mockPlaneSpy = spyOn(mockPlane, 'isLanded');
            // Act
            testInstruction.landPlane();
            // Assert
            expect(mockPlaneSpy).toHaveBeenCalled();
        })

    })

})

describe('User Story 2 Test:', () => {
    let testInstruction;
    describe('Instruction Instantiation test:', () => {
        const mockAirport = {
            setAirportCapacity: () => null,
        }
        beforeEach(() => {
            const testInstruction = new Instruction("testInstruction", mockAirport);
        })
        afterEach(() => {
            const testInstruction = undefined;
        })
        it('2a. should call the airport\'s setAirportCapactiy method', () => {
            // Arrange
            const mockAirportSpy = spyOn(mockAirport, 'setAirportCapacity');
            // Act
            testInstruction.setAirportCapacity();
            // Assert
            expect(mockAirportSpy).toHaveBeenCalled();
        })
    })
})