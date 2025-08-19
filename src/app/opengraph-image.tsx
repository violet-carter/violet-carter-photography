import { ImageResponse } from 'next/og'

export const alt = 'Violet Carter Photography - New York Wedding Photographer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8fafc',
          backgroundImage: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        }}
      >
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          {/* Logo/Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '20px',
              fontFamily: 'system-ui',
            }}
          >
            Violet Carter
          </div>
          
          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              color: '#d97706',
              marginBottom: '30px',
              fontWeight: '600',
              fontFamily: 'system-ui',
            }}
          >
            New York Wedding Photographer
          </div>
          
          {/* Description */}
          <div
            style={{
              fontSize: 24,
              color: '#64748b',
              maxWidth: '800px',
              lineHeight: '1.4',
              fontFamily: 'system-ui',
            }}
          >
            Documentary & Film-Inspired Photography
          </div>
          
          {/* Keywords */}
          <div
            style={{
              fontSize: 18,
              color: '#94a3b8',
              marginTop: '30px',
              fontFamily: 'system-ui',
            }}
          >
            Timeless • Personal • Intentional
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            width: '100%',
            height: '8px',
            background: 'linear-gradient(90deg, #d97706 0%, #f59e0b 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
