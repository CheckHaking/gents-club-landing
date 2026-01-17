# Performance Optimization Guide

## LCP Optimization (Target: < 1.2s)

### Implemented Optimizations

1. **Critical CSS Inlining**
   - Base styles inlined in `<head>`
   - Prevents render-blocking CSS
   - Ensures immediate paint

2. **Font Loading Strategy**
   - Preconnect to Google Fonts
   - Font preloading for Playfair Display
   - `font-display: swap` for non-blocking text render
   - Async loading with fallback

3. **CSS Containment**
   - `contain: layout style paint` on hero section
   - Prevents layout shift
   - Improves rendering performance

4. **Build Optimizations**
   - Terser minification with console removal
   - LightningCSS for optimal CSS minification
   - HTML compression enabled
   - Auto-inlining of small stylesheets

5. **Resource Hints**
   - Preconnect to external domains
   - DNS prefetch for faster connections

### Monitoring

Web Vitals are logged to console:
- **LCP**: Largest Contentful Paint
- **FID**: First Input Delay
- **CLS**: Cumulative Layout Shift

Check browser console for real-time metrics.

## Additional Recommendations

### For Production

1. **Image Optimization**
   - Add WebP/AVIF images
   - Use `<picture>` with srcset
   - Implement lazy loading for below-fold images
   - Consider Astro's Image component

2. **CDN Deployment**
   - Deploy to edge CDN (Netlify, Vercel, Cloudflare Pages)
   - Enable HTTP/2 or HTTP/3
   - Configure caching headers

3. **Advanced Optimizations**
   - Implement service worker for caching
   - Enable Brotli compression
   - Use resource hints for third-party scripts
   - Consider critical CSS extraction tools

### Testing

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Test with Lighthouse
npx lighthouse http://localhost:4321 --view

# Test with WebPageTest
# Visit: https://www.webpagetest.org
```

## Performance Checklist

- [x] Critical CSS inlined
- [x] Fonts optimized and preloaded
- [x] Minimal JavaScript
- [x] CSS containment
- [x] Build optimization
- [x] Compression enabled
- [ ] Images optimized (add when images are included)
- [ ] Service worker (optional)
- [ ] CDN configured (deployment phase)

## Expected Metrics

With these optimizations:
- **LCP**: 0.8s - 1.2s (text-based hero)
- **FID**: < 50ms (minimal JS)
- **CLS**: < 0.05 (contained layouts)
- **TTI**: < 2s (Time to Interactive)
- **FCP**: < 0.8s (First Contentful Paint)
