import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class FileSaveService{
    
    save(filename: string, fileExtension: string, fileContent: string, type: string){
        const file = filename + '.' + fileExtension;
        
        const fileObject = new Blob([fileContent], { type: type });

        const link = document.createElement("a");
        link.href = URL.createObjectURL(fileObject);
        link.download = file;
        link.click();
        link.remove();
    }
}