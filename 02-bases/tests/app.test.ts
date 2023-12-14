describe('Test in the App File', () => {
    test('should be result', () => {
        
        //1. Arrange
        const num1:number = 10;
        const num2:number = 20;
        
        
        //2. Act
        const result:number = num1 + num2;
        
        
        //3. Assert
        expect(result).toBe(30)
    });
});