# Component Documentation

## Component Structure

This project organizes components into three categories based on their complexity and purpose.

### 🧱 Base Components (Basic Building Blocks)

#### Button.jsx
Reusable button component with multiple variants and sizes.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `onClick`: Function
- `disabled`: Boolean (default: false)
- `type`: 'button' | 'submit' | 'reset' (default: 'button')

**Usage:**
```jsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Place Order
</Button>
```

---

#### Badge.jsx
Status badge component for displaying information.

**Props:**
- `variant`: 'success' | 'info' | 'warning' (default: 'success')
- `className`: String

**Usage:**
```jsx
<Badge variant="success">✓ In Stock</Badge>
```

---

#### Input.jsx
Form input component with validation support.

**Props:**
- `type`: String (default: 'text')
- `placeholder`: String
- `value`: String | Number
- `onChange`: Function
- `disabled`: Boolean
- `min`: Number
- `max`: Number

**Usage:**
```jsx
<Input
  type="text"
  placeholder="Enter your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

---

#### Logo.jsx
Responsive logo component with size variants.

**Props:**
- `src`: String (required)
- `alt`: String (default: 'Waikkala Grinding Mills')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `className`: String

**Usage:**
```jsx
<Logo src={logoUrl} size="lg" />
```

---

#### Icon.jsx
SVG icon component.

**Props:**
- `src`: String (required)
- `alt`: String
- `size`: Number (default: 24)
- `className`: String

**Usage:**
```jsx
<Icon src={iconUrl} alt="Search" size={20} />
```

---

### 🔧 Composite Components (Component Combinations)

#### QuantitySelector.jsx
Interactive quantity selection with increment/decrement buttons.

**Props:**
- `initialQuantity`: Number (default: 1)
- `onQuantityChange`: Function
- `className`: String

**Usage:**
```jsx
<QuantitySelector
  initialQuantity={1}
  onQuantityChange={(qty) => console.log(qty)}
/>
```

---

#### SearchBar.jsx
Search input with icon and live search functionality.

**Props:**
- `placeholder`: String (default: 'Search for products...')
- `onSearch`: Function
- `className`: String

**Usage:**
```jsx
<SearchBar
  placeholder="Search products..."
  onSearch={(term) => console.log(term)}
/>
```

---

#### ProductImage.jsx
Product image gallery with thumbnails and image switching.

**Props:**
- `images`: Array of Strings (required)
- `alt`: String (default: 'Product')
- `className`: String

**Usage:**
```jsx
<ProductImage
  images={[image1, image2, image3]}
  alt="Ceylon Raga Reserve"
/>
```

---

#### SocialLinks.jsx
Social media icon links.

**Props:**
- `icons`: Array of Objects (required)
  - Each object: `{ src, url, label, size? }`
- `className`: String

**Usage:**
```jsx
<SocialLinks icons={[
  { src: fbIcon, url: "#", label: "Facebook" },
  { src: igIcon, url: "#", label: "Instagram" }
]} />
```

---

#### PaymentOptions.jsx
Payment method display component.

**Props:**
- `className`: String

**Usage:**
```jsx
<PaymentOptions />
```

---

#### DeliveryInfo.jsx
Delivery information display.

**Props:**
- `deliveryIcon`: String (required)
- `clockIcon`: String (required)
- `className`: String

**Usage:**
```jsx
<DeliveryInfo
  deliveryIcon={deliveryIconUrl}
  clockIcon={clockIconUrl}
/>
```

---

### 📦 Container Components (Complex Components)

#### Header.jsx
Complete page header with logo, navigation, and search.

**Props:**
- `logoSrc`: String (required)
- `bgImage`: String (required)

**Features:**
- Promotional banner
- Navigation menu (Products, Contacts, Order Tracking)
- Search bar
- Responsive design

**Usage:**
```jsx
<Header logoSrc={logoUrl} bgImage={bgImageUrl} />
```

---

#### Footer.jsx
Complete page footer with company information and social links.

**Props:**
- `logoSrc`: String (required)
- `socialIcons`: Array of Objects (required)

**Features:**
- Company logo
- Company description
- Social media links
- Copyright notice

**Usage:**
```jsx
<Footer
  logoSrc={logoUrl}
  socialIcons={socialIconsArray}
/>
```

---

#### ProductDetails.jsx
Complete product information section.

**Props:**
- `title`: String (required)
- `subtitle`: String (required)
- `price`: String (required)
- `currency`: String (default: 'LKR')
- `weight`: String (required)
- `inStock`: Boolean (default: true)
- `deliveryIcon`: String (required)
- `clockIcon`: String (required)
- `onOrder`: Function

**Features:**
- Product title and subtitle
- Stock status badge
- Price display
- Package weight information
- Payment options
- Quantity selector
- Order button
- Delivery information

**Usage:**
```jsx
<ProductDetails
  title="Ceylon Raga Reserve"
  subtitle="Masala Brew"
  price="1,500.00"
  weight="100g | 3.4oz"
  deliveryIcon={deliveryIcon}
  clockIcon={clockIcon}
  onOrder={handleOrder}
/>
```

---

#### TabsSection.jsx
Tabbed content section with multiple tabs.

**Props:**
- `tabs`: Array of Objects (required)
  - Each object: `{ title, content }`
  - Content array: `[{ type, text?, items? }]`
    - type: 'paragraph' | 'heading' | 'list'

**Features:**
- Multiple tabs
- Dynamic content rendering
- Smooth transitions

**Usage:**
```jsx
<TabsSection tabs={[
  {
    title: "Description",
    content: [
      { type: "paragraph", text: "Product description..." },
      { type: "heading", text: "Key Features:" },
      { type: "list", items: ["Feature 1", "Feature 2"] }
    ]
  }
]} />
```

---

### 📄 Pages

#### ProductPage.jsx
Main product page that combines all container components.

**Features:**
- Header with navigation
- Product image gallery
- Product details sidebar
- Tabbed content section
- Footer

**Usage:**
```jsx
import ProductPage from './pages/ProductPage';

function App() {
  return <ProductPage />;
}
```

---

## Styling Guidelines

All components use Tailwind CSS classes and follow these principles:

1. **Mobile-First**: Base styles target mobile, with responsive modifiers for larger screens
2. **Consistent Spacing**: Use Tailwind's spacing scale (p-4, m-2, gap-6, etc.)
3. **Custom Colors**: Use the theme colors defined in tailwind.config.js
4. **Reusability**: Components accept className prop for custom styling

### Custom Colors Available:
- `bg-primary` / `text-primary` - Dark green (#02261c)
- `bg-secondary` / `text-secondary` - Orange/tan (#d4a574)
- `bg-success` / `text-success` - Green (#2e7d32)
- `bg-gray-lightest` - Very light gray (#f8f9fa)

### Responsive Breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

---

## Best Practices

1. **Always provide PropTypes** for type checking
2. **Use semantic HTML** elements (header, main, footer, nav, etc.)
3. **Add ARIA labels** for accessibility
4. **Provide default props** where applicable
5. **Use functional components** with hooks
6. **Keep components focused** on a single responsibility
7. **Extract reusable logic** into custom hooks if needed

---

## Adding New Components

When creating new components:

1. Determine the appropriate category:
   - **Base**: Simple, reusable UI elements (buttons, inputs, icons)
   - **Composite**: Combinations of base components (search bars, selectors)
   - **Containers**: Complex components that compose multiple components (headers, footers)
2. Create the component file in the correct directory
3. Define PropTypes for all props
4. Provide default props where appropriate
5. Use Tailwind classes for styling
6. Add JSDoc comments for documentation
7. Export as default

Example template:
```jsx
import PropTypes from 'prop-types';

const MyComponent = ({ prop1, prop2 = 'default' }) => {
  return (
    <div className="...">
      {/* Component JSX */}
    </div>
  );
};

MyComponent.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.string,
};

export default MyComponent;
```
