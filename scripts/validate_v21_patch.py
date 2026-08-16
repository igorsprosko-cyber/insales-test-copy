from pathlib import Path
import re

text = Path('V2.1_STAGE3_PATCH.liquid').read_text(encoding='utf-8')

required = [
    'wood-top-s-1',
    'wood-bottom-s-1',
    "formBlock.dataset.vl21RequestType = 'metal'",
    'Запрос по металлическим опорам с сайта',
    "event.stopImmediatePropagation()",
    '.vl-v2-final { display: none !important; }',
]

for token in required:
    assert token in text, f'missing required token: {token}'

assert ':has(' not in text, 'patch must not introduce :has() dependency'
assert len(re.findall(r'<script\b', text, flags=re.I)) == 1
assert len(re.findall(r'</script>', text, flags=re.I)) == 1

print('V2.1 Stage 3 patch validation: PASS')
