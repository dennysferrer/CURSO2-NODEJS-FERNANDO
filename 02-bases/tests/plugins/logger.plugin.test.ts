
import { logger as winstonLogger, buildLogger } from "../../src/js-foundation/plugins/logger.plugin";



describe("logger.plugin.ts", () => {
    test("builLogger should return a function logger", () => {
        const logger = buildLogger('test');
        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    });

    test("looger.log should log a message", () => {
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
        const message = "test message";
        const service = "test service"; 

        const logger = buildLogger(service);
        logger.log(message);

        expect(winstonLogger.log).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({
                "level": "info",
                message,
                service
            })
        );
    })
})