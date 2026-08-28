#!/usr/bin/env python3
"""Generate website preview + OG images from the final product PDF.

Renders specific pages of `California_CDL_Exam_Sprint_Guide_V1.pdf` to PNG for
the site's preview gallery, and composes a branded OG image with PyMuPDF.
Run from the repo root:  python website/scripts/generate-images.py
"""
import os

import fitz

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PDF = os.path.join(ROOT, "California_CDL_Exam_Sprint_Guide_V1.pdf")
OUT = os.path.join(ROOT, "website", "public", "images")
PUBLIC = os.path.join(ROOT, "website", "public")
os.makedirs(OUT, exist_ok=True)

# (0-based page index, output slug) — cover, numbers, air brake, traps
PAGES = [(0, "cover"), (2, "numbers"), (3, "air-brake"), (6, "traps")]

print("Rendering PDF pages...")
d = fitz.open(PDF)
dims = {}
for idx, slug in PAGES:
    pix = d[idx].get_pixmap(matrix=fitz.Matrix(2, 2))
    path = os.path.join(OUT, f"{slug}.png")
    pix.save(path)
    dims[slug] = (pix.width, pix.height)
    print(f"  {slug}.png  {pix.width}x{pix.height}")
d.close()

print("Rendering OG image...")
NAVY = (11 / 255, 31 / 255, 58 / 255)
YELLOW = (245 / 255, 197 / 255, 24 / 255)
WHITE = (1, 1, 1)
MUTED = (159 / 255, 176 / 255, 200 / 255)

og = fitz.open()
page = og.new_page(width=1200, height=630)
page.draw_rect(fitz.Rect(0, 0, 1200, 630), color=None, fill=NAVY)
page.draw_rect(fitz.Rect(0, 0, 1200, 14), color=None, fill=YELLOW)

page.insert_text((80, 120), "CALIFORNIA CDL EDITION", fontsize=22, fontname="hebo", color=YELLOW)
page.insert_text((80, 216), "California CDL", fontsize=68, fontname="hebo", color=WHITE)
page.insert_text((80, 298), "Exam Sprint Guide", fontsize=68, fontname="hebo", color=WHITE)
page.insert_text((80, 378), "Numbers  •  Air Brakes  •  Pre-Trip  •  Exam Traps", fontsize=28, fontname="hebo", color=YELLOW)
page.insert_text((80, 588), "12-page PDF  ·  Independent study resource", fontsize=20, fontname="helv", color=MUTED)

pix = page.get_pixmap(matrix=fitz.Matrix(1, 1))
pix.save(os.path.join(PUBLIC, "og-image.png"))
og.close()

print("  og-image.png  1200x630")
print("Done.")
