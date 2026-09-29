# حاسبها — احسبها في ثواني ⚡

موقع حاسبات عربي مجاني (10 حاسبات) — Next.js 14 + TypeScript + Tailwind CSS.

## التشغيل

```bash
npm install
npm run dev        # بيئة التطوير على http://localhost:3000
npm run build      # للنشر
```

## إضافة حاسبة جديدة

كل الحاسبات معرّفة في ملف واحد: `lib/calculators.ts`.
أضف عنصرًا جديدًا للمصفوفة `CALCULATORS` (الاسم، الأيقونة، الحقول، دالة `compute`، خطوات الاستخدام، الحاسبات المرتبطة)
وسيتولد الرابط `/calculators/<slug>` والـ SEO والـ Sitemap تلقائيًا.

## تفعيل الإعلانات

عدّل الملف `lib/ads.ts` فقط:
- `enabled = true`
- ضع `client` (ca-pub-...) ومعرّفات الوحدات `slots`.

## أماكن الإعلانات
- أسفل الهيدر: `components/AdSlot` في `app/layout.tsx`
- أسفل الحاسبة: `app/calculators/[slug]/page.tsx`

## البنية
- `app/` — الصفحات (App Router)
- `lib/calculators.ts` — بيانات ومعادلات الحاسبات العشر
- `lib/ads.ts` — إعدادات AdSense من مكان واحد
- `components/` — الهيدر، البحث، المفضلة، الوضع الليلي، الإعلانات

> غيّر `https://hasebha.com` في `app/layout.tsx` و `app/sitemap.ts` و `app/robots.ts` إلى نطاقك الفعلي.
