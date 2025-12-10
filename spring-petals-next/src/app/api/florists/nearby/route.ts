import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  const radius = searchParams.get('radius') || '5000'; // Default 5km radius

  if (!lat || !lng) {
    return NextResponse.json(
      { error: 'Latitude and longitude are required' },
      { status: 400 }
    );
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey || apiKey === 'your_api_key_here') {
    return NextResponse.json(
      {
        error: 'Google Maps API key not configured',
        message: 'Please add your API key to .env.local file'
      },
      { status: 500 }
    );
  }

  try {
    // Use Google Places API Nearby Search
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
      {
        params: {
          location: `${lat},${lng}`,
          radius: radius,
          type: 'florist',
          key: apiKey,
        },
      }
    );

    const florists = response.data.results.map((place: any) => ({
      id: place.place_id,
      name: place.name,
      suburb: place.vicinity,
      rating: place.rating || 0,
      totalRatings: place.user_ratings_total || 0,
      location: place.geometry.location,
      isOpen: place.opening_hours?.open_now,
      priceLevel: place.price_level,
      photo: place.photos?.[0]
        ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place.photos[0].photo_reference}&key=${apiKey}`
        : null,
    }));

    return NextResponse.json({ florists });
  } catch (error: any) {
    console.error('Error fetching florists:', error.response?.data || error.message);
    return NextResponse.json(
      {
        error: 'Failed to fetch florists',
        details: error.response?.data?.error_message || error.message
      },
      { status: 500 }
    );
  }
}
