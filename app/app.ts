function startGame() {
    // starting a new game
    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);
    
    postScore(80, playerName);
    postScore(-5, playerName);
}

function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`New game starting for player: ${name}`)
}

function getInputValue(elementId: string): string | undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);

    if (inputElement.value === '') {
        return undefined;
    } else {
        return inputElement.value;
    }
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {

    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    } else {
        logger = logMessage;
    }

    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message);

logMessage('Welcome to MultiMath');

function logError(err: string): void {
    console.error(err);
}