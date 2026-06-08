// home slider
(function() {
    const wrapper = document.getElementById('sliderWrapper');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const totalSlides = 3;
    const slideInterval = 3000;

    function updateSlider() {
        if (wrapper) {
            wrapper.style.transform = `translateX(-${currentIndex * 100 / totalSlides}%)`;
        }
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    window.nextSlide = function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    window.currentSlide = function(index) {
        currentIndex = index;
        updateSlider();
        resetTimer();
    }

    let autoSlide = setInterval(function() { window.nextSlide(); }, slideInterval);

    function resetTimer() {
        clearInterval(autoSlide);
        autoSlide = setInterval(function() { window.nextSlide(); }, slideInterval);
    }

    updateSlider();
})();

// section 1
(function() {
    var vwfIO = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.id === 'videoCol') {
                    document.querySelectorAll('#aboutSection .badge').forEach(function(b) {
                        b.classList.add('visible');
                    });
                }
                vwfIO.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.12 });

    document.querySelectorAll('#aboutSection .reveal').forEach(function(el) {
        vwfIO.observe(el);
    });

    window.vwfToggleAll = function() {
        var extra = document.getElementById('extraText');
        var faq = document.getElementById('faqSection');
        var arrow = document.getElementById('btnArrow');
        var btn = document.getElementById('readMoreBtn');
        var isOpen = extra.classList.contains('open');
        if (!isOpen) {
            extra.classList.add('open');
            faq.classList.add('open');
            if (arrow) arrow.classList.add('rotated');
            if (btn) {
                btn.style.background = '#2e7d32';
                btn.style.borderColor = '#2e7d32';
            }
            setTimeout(function() {
                document.getElementById('faqSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 350);
        } else {
            extra.classList.remove('open');
            faq.classList.remove('open');
            if (arrow) arrow.classList.remove('rotated');
            if (btn) {
                btn.style.background = '#e87722';
                btn.style.borderColor = '#e87722';
            }
        }
    };

    window.vwfToggleFaq = function(btn) {
        var answer = btn.nextElementSibling;
        var isOpen = answer.classList.contains('open');
        document.querySelectorAll('#aboutSection .faq-answer').forEach(function(a) { a.classList.remove('open'); });
        document.querySelectorAll('#aboutSection .faq-btn').forEach(function(b) { b.classList.remove('active'); });
        if (!isOpen) { answer.classList.add('open'); btn.classList.add('active'); }
    };
})();

// section 2
(function() {
    var pIO = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('p-visible');
            } else {
                entry.target.classList.remove('p-visible');
            }
        });
    }, { root: null, rootMargin: '-20px 0px -40px 0px', threshold: 0.1 });

    var revealEls = document.querySelectorAll('#plantsSection .p-reveal');
    revealEls.forEach(function(el) { pIO.observe(el); });

    var activeAnimations = new Map();

    function animateCount(el, target) {
        if (activeAnimations.has(el)) {
            cancelAnimationFrame(activeAnimations.get(el));
        }
        var start = 0;
        var duration = 1400;
        var startTime = null;
        function step(ts) {
            if (!startTime) startTime = ts;
            var progress = Math.min((ts - startTime) / duration, 1);
            var ease = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(ease * target);
            if (progress < 1) {
                var frameId = requestAnimationFrame(step);
                activeAnimations.set(el, frameId);
            } else {
                activeAnimations.delete(el);
            }
        }
        var initialFrameId = requestAnimationFrame(step);
        activeAnimations.set(el, initialFrameId);
    }

    var statsEl = document.getElementById('plantsStats');
    if (statsEl) {
        var statsIO = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                var nums = statsEl.querySelectorAll('.vwf-stat-number em');
                if (entry.isIntersecting) {
                    nums.forEach(function(em) {
                        var targetVal = parseInt(em.getAttribute('data-target'), 10);
                        animateCount(em, targetVal);
                    });
                } else {
                    nums.forEach(function(em) {
                        if (activeAnimations.has(em)) {
                            cancelAnimationFrame(activeAnimations.get(em));
                            activeAnimations.delete(em);
                        }
                        em.textContent = "0";
                    });
                }
            });
        }, { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0.2 });
        statsIO.observe(statsEl);
    }
})();

// section 3
(function() {
    var procIO = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('proc-visible');
            } else {
                entry.target.classList.remove('proc-visible');
            }
        });
    }, { root: null, rootMargin: '-30px 0px -40px 0px', threshold: 0.1 });

    var itemsToReveal = document.querySelectorAll('#processSection .proc-reveal');
    itemsToReveal.forEach(function(el) { procIO.observe(el); });
})();

// section 4
(function() {
    var track = document.getElementById('testiSliderTrack');
    var slides = document.querySelectorAll('.vwf-testi-slide');
    var dotsContainer = document.getElementById('testiDotsContainer');
    
    if (track && slides.length > 0 && dotsContainer) {
        var currentIndex = 0;
        var totalSlides = slides.length;
        var slideInterval = 4000;
        var timer;

        slides.forEach(function(_, index) {
            var dot = document.createElement('div');
            dot.classList.add('vwf-testi-dot');
            if (index === 0) dot.classList.add('dot-active');
            dot.addEventListener('click', function() {
                goToSlide(index);
                resetAutoplay();
            });
            dotsContainer.appendChild(dot);
        });

        var dots = document.querySelectorAll('.vwf-testi-dot');

        function goToSlide(index) {
            if (index >= totalSlides) index = 0;
            if (index < 0) index = totalSlides - 1;
            currentIndex = index;
            track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
            dots.forEach(function(d) { d.classList.remove('dot-active'); });
            if (dots[currentIndex]) dots[currentIndex].classList.add('dot-active');
        }

        function startAutoplay() {
            timer = setInterval(function() {
                goToSlide(currentIndex + 1);
            }, slideInterval);
        }

        function resetAutoplay() {
            clearInterval(timer);
            startAutoplay();
        }

        startAutoplay();
    }

    var testiIO = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('testi-visible');
            } else {
                entry.target.classList.remove('testi-visible');
            }
        });
    }, { root: null, rootMargin: '-20px 0px -40px 0px', threshold: 0.1 });

    var targets = document.querySelectorAll('#testimonialSection .testi-reveal');
    targets.forEach(function(el) { testiIO.observe(el); });
})();

// section 5
(function() {
    var blogIO = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('vwf-visible');
            } else {
                entry.target.classList.remove('vwf-visible');
            }
        });
    }, { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.15 });

    var revealElements = document.querySelectorAll('#blogSection .vwf-reveal');
    revealElements.forEach(function(element) {
        blogIO.observe(element);
    });
})();
