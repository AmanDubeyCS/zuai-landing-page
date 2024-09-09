class StackCards {
    element: HTMLElement;
    items: NodeListOf<HTMLElement>;
    observer: IntersectionObserver;
    scrollingListener: ((this: Window, ev: Event) => void) | false;
    scrolling: boolean;
  
    constructor(element: HTMLElement) {
      this.element = element;
      this.items = element.querySelectorAll(".js-stack-cards__item");
      this.scrollingListener = false;
      this.scrolling = false;
      this.observer = new IntersectionObserver(this.stackCardsCallback.bind(this));
      this.observer.observe(this.element);
    }
  
    stackCardsCallback(entries: IntersectionObserverEntry[]): void {
      if (entries[0].isIntersecting) {
        if (this.scrollingListener) return;
        this.stackCardsInitEvent();
      } else {
        if (!this.scrollingListener) return;
        window.removeEventListener("scroll", this.scrollingListener);
        this.scrollingListener = false;
      }
    }
  
    stackCardsInitEvent(): void {
      this.scrollingListener = this.stackCardsScrolling.bind(this);
      window.addEventListener("scroll", this.scrollingListener);
    }
  
    stackCardsScrolling(): void {
      if (this.scrolling) return;
      this.scrolling = true;
      window.requestAnimationFrame(this.animateStackCards.bind(this));
    }
  
    animateStackCards(): void {
      const top = this.element.getBoundingClientRect().top;
      const cardHeight = this.items[0].offsetHeight;
      const marginY = window.innerWidth <= 640 ? 10 : 20;
  
      for (let i = 0; i < this.items.length; i++) {
        const scrolling = cardHeight - top - i * (cardHeight + marginY);
        if (scrolling > 0) {
          this.items[i].style.transform =
            `translateY(${marginY * i}px) scale(${(cardHeight - scrolling * 0.05) / cardHeight})`;
        } else {
          this.items[i].style.transform = "";
        }
      }
  
      this.scrolling = false;
    }
  }
  
  export default StackCards;