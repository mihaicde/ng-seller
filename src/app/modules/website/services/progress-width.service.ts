import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ProgressWidthService {

    public progressWidth = '10%';

    setProgress(width) {
        this.progressWidth = width;
        console.log(this.progressWidth);
    }


}
