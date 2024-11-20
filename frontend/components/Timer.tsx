import React from "react";

const styles = {
  bar: `
    w-[100%]
    h-[20px]
    bg-gray-300
    rounded-full
    overflow-hidden
    mx-auto
  `,
};

interface TimerProps {
  time: number;
}

const Timer: React.FC<TimerProps> = ({ time }) => {
  const maxTime = 30; // 最大時間
  const progress = (time / maxTime) * 100; // 残り時間を%で計算

  // タイマーのバーの色を動的に変更
  const timerClass = `h-[20px] ${progress > 50 ? "bg-green-500" : progress > 20 ? "bg-orange-500" : "bg-red-500"} transition-all duration-500`;

  return (
    <div className="mb-5">
      <div className={styles.bar}>
        {/* 動的に幅を設定 */}
        <div className={timerClass} style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-center mt-1">Time: {time}s</p>
    </div>
  );
};

export default Timer;
