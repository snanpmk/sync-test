# SynConnect v3 - File Storage & Image Handling

## Storage Provider

### Cloudinary ✅

**Why Cloudinary?**
- ✅ **Free Tier**: 25GB storage, 25GB bandwidth/month
- ✅ **Built-in CDN**: Fast image delivery worldwide
- ✅ **Automatic Optimization**: WebP conversion, lazy loading
- ✅ **Image Transformations**: Resize, crop, compress on-the-fly
- ✅ **Easy Integration**: SDK for Node.js and React
- ✅ **No infrastructure management**: Fully managed service

**Pricing:**
- Free: 25GB storage, 25GB bandwidth
- Plus: $89/month for 100GB (if we exceed free tier)

**Setup:**
```bash
npm install cloudinary
```

---

## Image Upload Limits

### General Limits

| Type | Max Size | Max Count | Allowed Formats |
|------|----------|-----------|-----------------|
| **Profile Picture** | 2 MB | 1 | JPG, PNG, WebP |
| **Cover Photo** | 2 MB | 1 | JPG, PNG, WebP |
| **Product Images** | 2 MB | 5 per product | JPG, PNG, WebP |
| **Logo (Business Profile)** | 2 MB | 1 | JPG, PNG, WebP, SVG |

### File Size Validation
```javascript
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB in bytes

if (file.size > MAX_FILE_SIZE) {
  throw new Error("File size must be less than 2MB");
}
```

### Allowed MIME Types
```javascript
const ALLOWED_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/svg+xml' // Only for logos
];

if (!ALLOWED_TYPES.includes(file.type)) {
  throw new Error("Only JPG, PNG, WebP, and SVG files are allowed");
}
```

---

## Image Dimensions

### Profile Picture (Square) 📸

**Dimensions**: 800×800 px (square)
- **Minimum**: 400×400 px
- **Recommended**: 800×800 px
- **Maximum**: 2000×2000 px
- **Aspect Ratio**: 1:1 (square)
- **Display Size**: ~50% of iPhone screen width (~195px on iPhone 15)

**Why 800×800?**
- ✅ Fits half of iPhone 15 screen (390px width → 195px display)
- ✅ Retina-ready (2x pixel density)
- ✅ Small file size when compressed
- ✅ Looks sharp on all devices

**Cropping:**
- User uploads any image
- Frontend crops to square (1:1 aspect ratio)
- User can adjust crop area
- Cloudinary resizes to 800×800

**Example:**
```javascript
// Cloudinary transformation
cloudinary.url('profile_pic.jpg', {
  width: 800,
  height: 800,
  crop: 'fill',
  gravity: 'face', // Auto-detect face and center
  quality: 'auto',
  fetch_format: 'auto' // Auto WebP for supported browsers
});
```

---

### Cover Photo (Landscape) 🖼️

**Dimensions**: 1200×400 px (3:1 aspect ratio)
- **Minimum**: 900×300 px
- **Recommended**: 1200×400 px
- **Maximum**: 2400×800 px
- **Aspect Ratio**: 3:1 (landscape)
- **Display Size**: Full width of profile page

**Why 1200×400?**
- ✅ Standard cover photo ratio (like LinkedIn, Twitter)
- ✅ Fits mobile screens (390px) and desktop (1200px+)
- ✅ Looks professional and modern
- ✅ Small file size when compressed

**Cropping:**
- User uploads any image
- Frontend crops to 3:1 aspect ratio
- User can adjust crop area
- Cloudinary resizes to 1200×400

**Example:**
```javascript
// Cloudinary transformation
cloudinary.url('cover_photo.jpg', {
  width: 1200,
  height: 400,
  crop: 'fill',
  gravity: 'center',
  quality: 'auto',
  fetch_format: 'auto'
});
```

---

### Product Images 🛍️

**Dimensions**: 800×800 px (square, recommended)
- **Minimum**: 600×600 px
- **Recommended**: 800×800 px
- **Maximum**: 2000×2000 px
- **Aspect Ratio**: 1:1 (square) or 4:3 (landscape)
- **Max Images**: 5 per product

**Why 800×800?**
- ✅ Standard e-commerce image size
- ✅ Looks good in product grid and detail view
- ✅ Consistent with profile picture size
- ✅ Small file size

**Example:**
```javascript
// Cloudinary transformation
cloudinary.url('product_image.jpg', {
  width: 800,
  height: 800,
  crop: 'fill',
  gravity: 'center',
  quality: 'auto',
  fetch_format: 'auto'
});
```

---

### Logo (Business Profile) 🏢

**Dimensions**: 400×400 px (square)
- **Minimum**: 200×200 px
- **Recommended**: 400×400 px
- **Maximum**: 1000×1000 px
- **Aspect Ratio**: 1:1 (square) or original (for SVG)
- **Formats**: JPG, PNG, WebP, SVG

**Why 400×400?**
- ✅ Smaller than profile picture (logos are simpler)
- ✅ Looks sharp on all devices
- ✅ SVG support for scalable logos

**Example:**
```javascript
// Cloudinary transformation (for raster images)
cloudinary.url('logo.png', {
  width: 400,
  height: 400,
  crop: 'fit', // Maintain aspect ratio
  background: 'transparent',
  quality: 'auto',
  fetch_format: 'auto'
});
```

---

## Responsive Image Delivery

### Profile Picture (Responsive Sizes)

```javascript
// Mobile (1x)
cloudinary.url('profile_pic.jpg', { width: 195, height: 195 });

// Mobile (2x Retina)
cloudinary.url('profile_pic.jpg', { width: 390, height: 390 });

// Desktop (1x)
cloudinary.url('profile_pic.jpg', { width: 300, height: 300 });

// Desktop (2x Retina)
cloudinary.url('profile_pic.jpg', { width: 600, height: 600 });
```

### Cover Photo (Responsive Sizes)

```javascript
// Mobile (390px width)
cloudinary.url('cover_photo.jpg', { width: 390, height: 130 });

// Tablet (768px width)
cloudinary.url('cover_photo.jpg', { width: 768, height: 256 });

// Desktop (1200px width)
cloudinary.url('cover_photo.jpg', { width: 1200, height: 400 });
```

---

## Upload Flow

### Frontend Upload (React)

```typescript
// 1. User selects file
const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  // Validate file size
  if (file.size > 2 * 1024 * 1024) {
    toast.error("File size must be less than 2MB");
    return;
  }

  // Validate file type
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
    toast.error("Only JPG, PNG, and WebP files are allowed");
    return;
  }

  // Show crop modal
  setCropImage(file);
};

// 2. User crops image (using react-image-crop)
const handleCropComplete = async (croppedBlob: Blob) => {
  // Upload to backend
  const formData = new FormData();
  formData.append('image', croppedBlob);
  formData.append('type', 'profile_picture');

  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  });

  const { url } = await response.json();
  setProfilePicture(url);
};
```

### Backend Upload (Node.js + Cloudinary)

```typescript
// POST /api/upload
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer (memory storage)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
});

// Upload endpoint
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    const { type } = req.body; // 'profile_picture', 'cover_photo', 'product_image'
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: `synconnect/${type}`,
          transformation: getTransformation(type),
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

      uploadStream.end(file.buffer);
    });

    res.json({
      url: result.secure_url,
      publicId: result.public_id,
    });
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' });
  }
});

// Get transformation based on image type
function getTransformation(type: string) {
  switch (type) {
    case 'profile_picture':
      return { width: 800, height: 800, crop: 'fill', gravity: 'face' };
    case 'cover_photo':
      return { width: 1200, height: 400, crop: 'fill', gravity: 'center' };
    case 'product_image':
      return { width: 800, height: 800, crop: 'fill', gravity: 'center' };
    case 'logo':
      return { width: 400, height: 400, crop: 'fit', background: 'transparent' };
    default:
      return {};
  }
}
```

---

## Image Optimization

### Automatic Optimizations (Cloudinary)

**1. Format Conversion:**
- Automatically serve WebP to supported browsers
- Fallback to JPG/PNG for older browsers

**2. Quality Optimization:**
- `quality: 'auto'` - Cloudinary auto-adjusts quality
- Reduces file size by 30-50% without visible quality loss

**3. Lazy Loading:**
- Use `loading="lazy"` attribute
- Images load only when visible

**4. Responsive Images:**
- Serve different sizes based on device
- Use `srcset` for multiple resolutions

### Example (React Component)

```tsx
// Profile Picture Component
export function ProfilePicture({ url, name }: { url: string; name: string }) {
  return (
    <img
      src={url}
      alt={name}
      loading="lazy"
      srcSet={`
        ${cloudinary.url(url, { width: 195 })} 195w,
        ${cloudinary.url(url, { width: 390 })} 390w,
        ${cloudinary.url(url, { width: 600 })} 600w
      `}
      sizes="(max-width: 768px) 195px, 300px"
      className="rounded-full w-48 h-48 object-cover"
    />
  );
}
```

---

## Database Schema

### User Profile Schema

```typescript
interface Profile {
  _id: ObjectId;
  userId: ObjectId;
  
  // Images
  profilePicture?: {
    url: string;           // Cloudinary URL
    publicId: string;      // Cloudinary public ID (for deletion)
    uploadedAt: Date;
  };
  
  coverPhoto?: {
    url: string;
    publicId: string;
    uploadedAt: Date;
  };
  
  // Other fields...
}
```

### Product Schema

```typescript
interface Product {
  _id: ObjectId;
  profileId: ObjectId;
  
  name: string;
  description: string;
  price: number;
  
  images: Array<{
    url: string;
    publicId: string;
    order: number;         // Display order (0-4)
    uploadedAt: Date;
  }>;
  
  // Max 5 images enforced in validation
}
```

---

## Image Deletion

### Delete from Cloudinary

```typescript
// When user deletes profile picture
async function deleteProfilePicture(profileId: string) {
  const profile = await Profile.findById(profileId);
  
  if (profile.profilePicture?.publicId) {
    // Delete from Cloudinary
    await cloudinary.uploader.destroy(profile.profilePicture.publicId);
    
    // Update database
    profile.profilePicture = undefined;
    await profile.save();
  }
}
```

---

## Environment Variables

```env
# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## Image Dimensions Summary

| Image Type | Dimensions | Aspect Ratio | Max Size | Max Count |
|------------|------------|--------------|----------|-----------|
| **Profile Picture** | 800×800 px | 1:1 (square) | 2 MB | 1 |
| **Cover Photo** | 1200×400 px | 3:1 (landscape) | 2 MB | 1 |
| **Product Image** | 800×800 px | 1:1 (square) | 2 MB | 5 per product |
| **Logo** | 400×400 px | 1:1 (square) | 2 MB | 1 |

---

## Mobile Display Sizes (iPhone 15)

**iPhone 15 Screen Width**: 390px

| Image Type | Display Size | Actual Size (2x) |
|------------|--------------|------------------|
| **Profile Picture** | 195px (50% width) | 390px |
| **Cover Photo** | 390px (full width) | 780px |
| **Product Image** | 180px (grid) | 360px |

---

## Cost Estimation

### Cloudinary Free Tier
- **Storage**: 25 GB
- **Bandwidth**: 25 GB/month
- **Transformations**: 25,000/month

### Estimated Usage (1000 users)
- **Profile Pictures**: 1000 × 200 KB = 200 MB
- **Cover Photos**: 1000 × 300 KB = 300 MB
- **Product Images**: 1000 × 5 × 200 KB = 1 GB
- **Total Storage**: ~1.5 GB (well within free tier)

**Bandwidth** (assuming 10,000 views/month):
- 10,000 × 500 KB = 5 GB (well within free tier)

**Conclusion**: Free tier is sufficient for v1 🎉

---

**Last Updated**: 2026-02-10
