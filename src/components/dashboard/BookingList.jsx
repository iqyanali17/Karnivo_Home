import React from 'react';
import { Clock, CheckCircle, XCircle, Calendar, ArrowRight, InfoIcon } from 'lucide-react';
import { FaUsers, FaMicrophoneAlt, FaChalkboard } from 'react-icons/fa';
// Single booking row. Uses 'variant' prop (pending/approved/rejected) to apply different styles.
const BookingListItem = ({
  variant = 'pending',
  roomName,
  roomType = 'meeting',
  date,
  time,
  duration,
  bookingId,
  errorMessage,
  onViewClick
}) => {

  // Style details for each status variant
  const variantConfig = {
    pending: {
      iconBg: 'bg-amber-50',
      badgeColor: 'bg-amber-50 text-amber-700',
      badgeIcon: <Clock className="w-3 h-3" />,
      badgeText: 'Pending',
      rowBg: ''
    },
    approved: {
      iconBg: 'bg-green-50',
      badgeColor: 'bg-green-50 text-green-700',
      badgeIcon: <CheckCircle className="w-3 h-3" />,
      badgeText: 'Approved',
      rowBg: ''
    },
    rejected: {
      iconBg: 'bg-red-50',
      badgeColor: 'bg-red-50 text-red-600',
      badgeIcon: <XCircle className="w-3 h-3" />,
      badgeText: 'Rejected',
      rowBg: 'bg-red-50/30'
    },
    completed: {
      iconBg: 'bg-blue-50',
      badgeColor: 'bg-blue-50 text-blue-600',
      badgeIcon: <Calendar className="w-3 h-3" />,
      badgeText: 'Completed',
      rowBg: ''
    }
  };

  // Icon details for each room type
  const roomIconConfig = {
    meeting: { icon: <FaUsers className="text-sm" />, pendingColor: 'text-amber-500', approvedColor: 'text-green-600', rejectedColor: 'text-red-400' },
    conference: { icon: <FaChalkboard className="text-sm" />, pendingColor: 'text-amber-500', approvedColor: 'text-green-600', rejectedColor: 'text-red-400' },
    auditorium: { icon: <FaMicrophoneAlt className="text-sm" />, pendingColor: 'text-green-600', approvedColor: 'text-green-600', rejectedColor: 'text-red-400' }
  };

  // Pick the correct styles based on provided props
  const config = variantConfig[variant] || variantConfig.pending;
  const roomConfig = roomIconConfig[roomType] || roomIconConfig.meeting;

  const getIconColor = () => {
    if (variant === 'pending') return roomConfig.pendingColor;
    if (variant === 'approved') return roomConfig.approvedColor;
    if (variant === 'rejected') return roomConfig.rejectedColor;
    return 'text-blue-500';
  };

  return (
    <div className={`flex items-center gap-4 px-[10px] py-[6px] ${config.rowBg}`}>
      <div className={`w-10 h-10 ${config.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
        <span className={getIconColor()}>
          {React.cloneElement(roomConfig.icon)}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className={`text-sm font-semibold ${variant === 'rejected' ? 'text-gray-700' : 'text-gray-900'}`}>
            {roomName}
          </p>
          <span className={`${config.badgeColor} px-2 py-0.5 rounded-full text-xs font-semibold inline-flex items-center gap-1 whitespace-nowrap`}>
            {config.badgeIcon}
            {config.badgeText}
          </span>
        </div>

        <p className="text-xs text-gray-400 mt-0.5">
          {date} · {time} · {duration}
        </p>

        {errorMessage && (
          <p className="text-xs text-red-500 mt-0.5 flex items-center gap-1">
            <InfoIcon className="w-3 h-3 flex-shrink-0" />
            {errorMessage}
          </p>
        )}
      </div>

      <div className="text-right flex-shrink-0">
        <p className="text-xs text-gray-400 font-mono">{bookingId}</p>
        <a
          href="#"
          className="text-xs text-[#0A66C2] hover:text-[#0A66C2] hover:underline mt-0.5 block font-semibold"
          onClick={(e) => {
            e.preventDefault();
            if (onViewClick) onViewClick();
          }}
        >
          View
        </a>
      </div>
    </div>
  );
};

// Container component that maps over booking data to render rows
const BookingList = () => {
  const bookings = [
    {
      id: '#BR-2026-008',
      room: 'Conference Room B',
      roomType: 'conference',
      date: 'Apr 7, 2026',
      time: '10:00 AM – 12:00 PM',
      duration: '2 hrs',
      variant: 'pending' // Shows yellow pending style
    },
    {
      id: '#BR-2026-007',
      room: 'Meeting Room 3',
      roomType: 'meeting',
      date: 'Apr 8, 2026',
      time: '3:00 PM – 5:00 PM',
      duration: '2 hrs',
      variant: 'pending'
    },
    {
      id: '#BR-2026-006',
      room: 'Meeting Room 1',
      roomType: 'meeting',
      date: 'Apr 5, 2026',
      time: '2:00 PM – 4:00 PM',
      duration: '2 hrs',
      variant: 'approved' // Shows green approved style
    },
    {
      id: '#BR-2026-005',
      room: 'Auditorium',
      roomType: 'auditorium',
      date: 'Apr 1, 2026',
      time: '10:00 AM – 5:00 PM',
      duration: '7 hrs',
      variant: 'approved'
    },
    {
      id: '#BR-2026-004',
      room: 'Conference Room A',
      roomType: 'conference',
      date: 'Mar 28, 2026',
      time: '11:00 AM – 2:00 PM',
      duration: '3 hrs',
      variant: 'rejected', // Shows red rejected style
      errorMessage: 'Space unavailable on requested date'
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h3 className="font-semibold text-gray-900 text-sm">Recent Booking Requests</h3>
        <a href="#" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1">
          View all <ArrowRight className="w-2.5 h-2.5" />
        </a>
      </div>

      <div className="divide-y divide-gray-50">
        {bookings.map((booking, index) => (
          <BookingListItem
            key={index}
            {...booking}
            roomName={booking.room}
            bookingId={booking.id}
            onViewClick={() => console.log(`View booking: ${booking.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default BookingList;
