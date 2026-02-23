// Adaptee: A European socket that provides 220V
class EuropeanSocket {
  public provide220V(): string {
    return 'Providing 220V power';
  }
}

// Target: The interface our US device expects (110V)
interface USSocket {
  provide110V(): string;
}

// Adapter: Makes the European socket compatible with the US device
class SocketAdapter implements USSocket {
  private europeanSocket: EuropeanSocket;

  constructor(europeanSocket: EuropeanSocket) {
    this.europeanSocket = europeanSocket;
  }

  public provide110V(): string {
    const voltage = this.europeanSocket.provide220V();
    return `${voltage} -> Adapter converts to 110V`;
  }
}

// Client: A device that only works with 110V
class USDevice {
  public charge(socket: USSocket): void {
    console.log(`Charging device: ${socket.provide110V()}`);
  }
}

// Usage
const euSocket = new EuropeanSocket();
const adapter = new SocketAdapter(euSocket);
const myPhone = new USDevice();

myPhone.charge(adapter); // Output: Charging device: Providing 220V power -> Adapter converts to 110V
