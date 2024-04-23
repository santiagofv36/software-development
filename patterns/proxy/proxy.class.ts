// Interfaz para el Servidor Web
interface WebServer {
  request(url: string): void;
}

// Implementación del Servidor Web Externo
export class RealWebServer implements WebServer {
  request(url: string): void {
    console.log(`Solicitud enviada al servidor externo para la URL: ${url}`);
  }
}

// Implementación del Proxy del Servidor Web
export class WebServerProxy implements WebServer {
  private realServer: RealWebServer;
  private bannedSites: Set<string>;

  constructor() {
    this.realServer = new RealWebServer();
    this.bannedSites = new Set<string>();
    // Agregamos algunos sitios prohibidos para simular la filtración
    this.bannedSites.add('sitio1.com');
    this.bannedSites.add('sitio2.com');
  }

  request(url: string): void {
    if (this.isBanned(url)) {
      console.log(`Acceso bloqueado al sitio: ${url}`);
    } else {
      this.realServer.request(url);
    }
  }

  private isBanned(url: string): boolean {
    return this.bannedSites.has(url);
  }
}
