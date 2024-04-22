// Interface para definir el comportamiento del estado
interface AudioPlayerState {
  play(): void;
  pause(): void;
  stop(): void;
}

// Implementación de un estado concreto: Reproduciendo
export class PlayingState implements AudioPlayerState {
  play(): void {
    console.log('El audio ya se está reproduciendo.');
  }

  pause(): void {
    console.log('Audio en pausa.');
  }

  stop(): void {
    console.log('Deteniendo la reproducción del audio.');
  }
}

// Implementación de un estado concreto: Pausado
export class PausedState implements AudioPlayerState {
  play(): void {
    console.log('Reanudando la reproducción del audio.');
  }

  pause(): void {
    console.log('El audio ya está en pausa.');
  }

  stop(): void {
    console.log('Deteniendo la reproducción del audio.');
  }
}

// Implementación de un estado concreto: Detenido
export class StoppedState implements AudioPlayerState {
  play(): void {
    console.log('Iniciando la reproducción del audio.');
  }

  pause(): void {
    console.log('El audio no se está reproduciendo.');
  }

  stop(): void {
    console.log('El audio ya está detenido.');
  }
}

// Contexto que utiliza el estado
export class AudioPlayer {
  private state: AudioPlayerState;

  constructor() {
    // Iniciamos el reproductor en estado detenido
    this.state = new StoppedState();
  }

  // Método para cambiar el estado del reproductor
  public changeState(state: AudioPlayerState): void {
    this.state = state;
  }

  // Métodos que delegan en el estado actual
  public play(): void {
    this.state.play();
  }

  public pause(): void {
    this.state.pause();
  }

  public stop(): void {
    this.state.stop();
  }
}

