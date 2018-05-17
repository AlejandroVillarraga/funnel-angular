export class User {
    private username: string;
    private firstname: string;
    private lastname: string;
    private email: string;
    private password:string;
    private logo: string;
    private cel1: number;
    private cel2: number;
    private linkFacebook: string;
    private linkInstragram: string;
    private schedule: string;
    private linkTA: string;
    public linkGoogleMaps: string;
    public tieneDomicilios: boolean;
    public tieneDatafono: boolean;


constructor(username:string, email:string, password:string, firstname: string, lastname: string, logo:string,
                cel1:number, cel2:number, linkFacebook:string, linkInstragram:string, schedule: string, linkTA:string,
                linkGoogleMaps: string, tieneDatafono: boolean, tieneDomicilios:boolean) {

        this.username=username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email=email;
        this.password=password;
        this.logo=logo;
        this.cel1=cel1;
        this.cel2=cel2;
        this.linkInstragram=linkInstragram;
        this.linkFacebook=linkFacebook;
        this.schedule=schedule;
        this.linkTA=linkTA;
        this.linkGoogleMaps=linkGoogleMaps;
        this.tieneDatafono=tieneDatafono;
        this.tieneDomicilios=tieneDomicilios;
    }



}

