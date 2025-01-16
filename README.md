![mansory](./assests/mansory.png)

# Masonry Project with CSS Grid

This project demonstrates a dynamic masonry layout built using **CSS Grid**. It features responsive grid columns, aspect ratio-based card sizing, lazy loading, infinite scroll, virtualization, and more.

---

## Getting Started

### Prerequisites

1. **Pexels API Key**

   - Create an API key on [Pexels](https://www.pexels.com/api/).
   - Save your API key in a `.env.local` file as follows:

   ```env
   PEXELS_API_KEY=your_api_key
   ```

2. **Install Dependencies**  
   Run the following command to install required packages:

   ```bash
   npm install
   ```

3. **Run The Tests**  
   Run the following command to test the project:

   ```bash
   npm run test
   ```

4. **Build the Project**  
   Build the project with:

   ```bash
   npm run build
   ```

5. **Start the Application**  
   Start the application locally:

   ```bash
   npm run start
   ```

6. **View in Browser**  
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

---

## Features

### 1. **Masonry Layout**

- Built using **CSS Grid** with a dynamic, responsive layout.
- The grid adjusts column widths based on breakpoints using `grid-template-columns`.
- Each card automatically spans rows based on its aspect ratio:
  - The `AspectRatio` is calculated as:
  ```js
  width / height;
  ```
  - The `reverseAspectRatio`, as we can see [here](src/components/GalleryItem/index.tsx#25) is calculated as:
    ```js
    Math.ceil(height / width) * offset;
    ```
  - The `offset` adjusts row height. For example, in this project, `offset = 10`.

### 2. **Virtualization**

- **Performance Optimization**:
  - Cards within the viewport render their full structure: `Card / Button / Image`.
  - Cards outside the viewport render as placeholders to reduce DOM complexity.

### 3. **Infinite Scroll**

- New cards are fetched when the user scrolls to the bottom.
- A `LoadMore` element triggers fetching new data when it becomes visible in the viewport.
- Fetching stops when there are no more items to load.

### 4. **On-Card Click (Modal View)**

- Clicking a card opens a **modal** that displays the card's details.
- The modal acts as an intermediary view before navigating to the final route: `/photos/[photoId]`.
- To complete the transition, click the picture within the modal to proceed to the final route.
- Alternatively, you can close the modal and continue scrolling.
- A low-resolution image (preloaded) serves as the background image in the modal while the high-resolution image loads, ensuring a smooth visual experience.

### 5. **Lazy Loading**

- Images are **lazy-loaded** to reduce blocking time and improve performance.

### 6. **Search Functionality**

- The header includes a search bar where users can type and submit queries.
- Search results update dynamically, and the selected search term is highlighted with a chip for better UX.

---

## How It Works

### **Dynamic Grid System**

- The masonry grid is based on a **dynamic CSS Grid layout**.
- Each card adjusts its row size depending on its aspect ratio, ensuring a clean, responsive design.

### **Image Lazy Loading**

- Images are loaded only when they enter the viewport to minimize bandwidth and improve load times.

### **Smooth Transitions**

- When a card is clicked, a modal is displayed with a smooth image transition from low-quality to high-quality content.

### **Infinite Scroll**

- Additional cards are fetched and rendered seamlessly as the user scrolls, ensuring a continuous browsing experience.

## **Tests**

some tests can be found here

- [Mansory Gallery](src/components/Mansory/__tests__/index.test.tsx)
- [Gallery Item](src/components/GalleryItem/__tests__/indext.test.tsx)
- [Search Filter](src/components/SearchFilter/__tests__/index.test.tsx)

---

## Technical Notes

- **Breakpoints** dynamically adjust the number of columns for optimal viewing on different screen sizes.
- **Virtualization** ensures only visible items are fully rendered, reducing memory usage.
- **Offset Adjustment** allows for fine-tuning row heights, offering design flexibility.
