import { ErrorHandler, Inject } from '@angular/core';
import { NotificationService } from './notification.service';


export class CustomErrorHandler implements ErrorHandler {

    constructor(@Inject(NotificationService) private notifyService: NotificationService) {
    }

    handleError(error: any): void {
        this.showErrorInConsole(error);
        setTimeout(() => {
          const errStr = error.toString();
          const err = errStr.substr(errStr.indexOf(' ') + 1);
          this.notifyService.error(err);
        });
    }

    private showErrorInConsole(error: any): void {
        if (console && console.group && console.error) {
            console.group('Error Log');
            console.error(error);
            console.error(error.message);
            console.error(error.toString());
            console.error(error.stack);
            console.groupEnd();
        }
    }
}
