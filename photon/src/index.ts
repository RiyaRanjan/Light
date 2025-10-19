// Main TypeScript file for the Photon project

class PhotonApp {
    private clickCount: number = 0;
    private button: HTMLButtonElement | null = null;
    private counter: HTMLParagraphElement | null = null;

    constructor() {
        this.init();
    }

    private init(): void {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupEventListeners());
        } else {
            this.setupEventListeners();
        }
    }

    private setupEventListeners(): void {
        this.button = document.getElementById('clickButton') as HTMLButtonElement;
        this.counter = document.getElementById('counter') as HTMLParagraphElement;

        if (this.button && this.counter) {
            this.button.addEventListener('click', () => this.handleButtonClick());
            console.log('Photon app initialized successfully!');
        } else {
            console.error('Required DOM elements not found');
        }
    }

    private handleButtonClick(): void {
        this.clickCount++;
        this.updateCounter();
        this.animateButton();
    }

    private updateCounter(): void {
        if (this.counter) {
            this.counter.textContent = `Click count: ${this.clickCount}`;
            
            // Add some visual feedback
            this.counter.style.transform = 'scale(1.1)';
            setTimeout(() => {
                if (this.counter) {
                    this.counter.style.transform = 'scale(1)';
                }
            }, 200);
        }
    }

    private animateButton(): void {
        if (this.button) {
            this.button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                if (this.button) {
                    this.button.style.transform = 'scale(1)';
                }
            }, 100);
        }
    }

    // Public method to get current click count
    public getClickCount(): number {
        return this.clickCount;
    }

    // Public method to reset counter
    public resetCounter(): void {
        this.clickCount = 0;
        this.updateCounter();
    }
}

// Initialize the app when the script loads
const app = new PhotonApp();

// Export for potential use in other modules
export default PhotonApp;
