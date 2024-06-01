import { CheckService } from '../domain/use-cases/checks/check-service';
import { CronService } from './cron/cron-service'


export class Server {

    static start(){
        console.log("Server started...");
        const job = CronService.createJob(
            '*/2 * * * * *',
            () => {
                const url = 'https://google.com';
                const checkService = new CheckService(
                    () => console.log(`${url} successfully started...`),
                    (error) => console.log('Error!')
                );
                checkService.execute(url);
                //checkService.execute('http://localhost:3000/posts')
            }
        );
        
    }


}
