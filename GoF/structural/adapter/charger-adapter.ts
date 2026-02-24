class EuropeanSocket {
  public provide220V(): string {
    return "Providing 220V power";
  }
}

interface USSocket {
  provide110V(): string;
}

class SocketAdapter implements USSocket {
  private readonly europeanSocket: EuropeanSocket;

  constructor(europeanSocket: EuropeanSocket) {
    this.europeanSocket = europeanSocket;
  }

  public provide110V(): string {
    const voltage = this.europeanSocket.provide220V();
    return `${voltage} -> Adapter converts to 110V`;
  }
}

class USDevice {
  public charge(socket: USSocket): void {
    console.log(`Charging device: ${socket.provide110V()}`);
  }
}

const euSocket = new EuropeanSocket();
const adapter = new SocketAdapter(euSocket);
const myPhone = new USDevice();

myPhone.charge(adapter);
