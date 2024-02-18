import { LoopIcon, MusicIcon, PlayIcon, PlayNextIcon, ShuffleIcon } from "$icons";

export function AudioPlayer() {
  return (
    <div className="flex min-h-full w-[486px] flex-col justify-between rounded-xl bg-muted-50 p-7">
      <div className="flex h-[38px] items-center justify-between">
        <h2 className="text-2xl font-bold">কালেকশন</h2>

        <button className="flex h-[1.875rem] items-center gap-2 rounded-md bg-muted-200 p-2">
          লিস্ট
          <MusicIcon className="h-5 w-5" />
        </button>
      </div>

      <svg width="430" height="160" viewBox="0 0 430 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_935)">
          <path d="M59.015 147.828L53.0127 153.92L59.015 160.012L65.0174 153.92L59.015 147.828Z" fill="#84827C" />
          <path d="M59.0072 136.548L53.6025 142.033L59.0072 147.519L64.412 142.033L59.0072 136.548Z" fill="#DAD9D4" />
          <path d="M58.9992 125.313L54.2051 130.179L58.9992 135.044L63.7932 130.179L58.9992 125.313Z" fill="#DAD9D4" />
          <path d="M58.9914 114.033L54.7949 118.292L58.9914 122.551L63.1878 118.292L58.9914 114.033Z" fill="#DAD9D4" />
          <path d="M58.9972 102.785L55.3984 106.438L58.9972 110.09L62.5961 106.438L58.9972 102.785Z" fill="#DAD9D4" />
          <path d="M59.0022 91.5185L56.001 94.5645L59.0021 97.6104L62.0033 94.5645L59.0022 91.5185Z" fill="#DAD9D4" />
          <path d="M58.9944 80.2573L56.5908 82.6967L58.9944 85.136L61.3979 82.6967L58.9944 80.2573Z" fill="#DAD9D4" />
          <path d="M58.9993 69.0092L57.1934 70.842L58.9993 72.6749L60.8052 70.842L58.9993 69.0092Z" fill="#DAD9D4" />
          <path d="M59.0022 55.8517L56.001 58.8976L59.0021 61.9435L62.0033 58.8976L59.0022 55.8517Z" fill="#DAD9D4" />
          <path d="M58.9944 44.5904L56.5908 47.0298L58.9944 49.4692L61.3979 47.0298L58.9944 44.5904Z" fill="#DAD9D4" />
          <path d="M58.9993 33.3423L57.1934 35.1752L58.9993 37.008L60.8052 35.1752L58.9993 33.3423Z" fill="#DAD9D4" />
          <path d="M71.0082 147.814L65.0059 153.906L71.0082 159.998L77.0106 153.906L71.0082 147.814Z" fill="#84827C" />
          <path d="M71.0004 136.553L65.5957 142.038L71.0004 147.524L76.4051 142.038L71.0004 136.553Z" fill="#84827C" />
          <path d="M70.9953 91.5234L67.9941 94.5693L70.9953 97.6153L73.9965 94.5693L70.9953 91.5234Z" fill="#DAD9D4" />
          <path d="M71.0061 80.262L68.6025 82.7014L71.0061 85.1408L73.4096 82.7014L71.0061 80.262Z" fill="#DAD9D4" />
          <path d="M71.011 68.9954L69.2051 70.8282L71.011 72.6611L72.8169 70.8282L71.011 68.9954Z" fill="#DAD9D4" />
          <path d="M70.9923 125.318L66.1982 130.184L70.9923 135.049L75.7864 130.184L70.9923 125.318Z" fill="#84827C" />
          <path d="M70.9845 114.038L66.7881 118.297L70.9845 122.556L75.181 118.297L70.9845 114.038Z" fill="#DAD9D4" />
          <path d="M70.9904 102.79L67.3916 106.443L70.9904 110.095L74.5892 106.443L70.9904 102.79Z" fill="#DAD9D4" />
          <path d="M70.9953 55.8564L67.9941 58.9023L70.9953 61.9483L73.9965 58.9023L70.9953 55.8564Z" fill="#DAD9D4" />
          <path d="M71.0061 44.5953L68.6025 47.0347L71.0061 49.474L73.4096 47.0347L71.0061 44.5953Z" fill="#DAD9D4" />
          <path d="M83.007 91.5283L80.0059 94.5742L83.007 97.6201L86.0082 94.5742L83.007 91.5283Z" fill="#84827C" />
          <path d="M82.9992 80.2669L80.5957 82.7063L82.9992 85.1457L85.4028 82.7063L82.9992 80.2669Z" fill="#84827C" />
          <path d="M83.0041 69.0002L81.1982 70.833L83.0041 72.6658L84.81 70.833L83.0041 69.0002Z" fill="#84827C" />
          <path d="M71.011 33.3286L69.2051 35.1614L71.011 36.9942L72.8169 35.1614L71.011 33.3286Z" fill="#DAD9D4" />
          <path d="M83.0014 147.819L76.999 153.911L83.0014 160.003L89.0037 153.911L83.0014 147.819Z" fill="#84827C" />
          <path d="M82.9936 136.558L77.5889 142.043L82.9936 147.528L88.3983 142.043L82.9936 136.558Z" fill="#84827C" />
          <path d="M82.9865 125.304L78.1924 130.17L82.9865 135.035L87.7806 130.17L82.9865 125.304Z" fill="#84827C" />
          <path d="M82.9963 114.043L78.7998 118.302L82.9963 122.561L87.1927 118.302L82.9963 114.043Z" fill="#84827C" />
          <path d="M95.0002 91.5331L91.999 94.579L95.0002 97.6249L98.0014 94.579L95.0002 91.5331Z" fill="#DAD9D4" />
          <path d="M94.9924 80.2531L92.5889 82.6925L94.9924 85.1319L97.3959 82.6925L94.9924 80.2531Z" fill="#DAD9D4" />
          <path d="M95.01 68.9919L93.2041 70.8247L95.01 72.6575L96.8159 70.8247L95.01 68.9919Z" fill="#DAD9D4" />
          <path d="M83.0021 102.795L79.4033 106.447L83.0021 110.1L86.6009 106.447L83.0021 102.795Z" fill="#84827C" />
          <path d="M83.007 55.8613L80.0059 58.9072L83.007 61.9531L86.0082 58.9072L83.007 55.8613Z" fill="#84827C" />
          <path d="M82.9992 44.6002L80.5957 47.0396L82.9992 49.4789L85.4028 47.0396L82.9992 44.6002Z" fill="#84827C" />
          <path d="M83.0041 33.3334L81.1982 35.1663L83.0041 36.9991L84.81 35.1663L83.0041 33.3334Z" fill="#84827C" />
          <path d="M95.0131 147.824L89.0107 153.916L95.0131 160.008L101.015 153.916L95.0131 147.824Z" fill="#84827C" />
          <path d="M106.993 91.5378L103.992 94.5837L106.993 97.6297L109.995 94.5837L106.993 91.5378Z" fill="#DAD9D4" />
          <path d="M106.998 80.2448L104.595 82.6842L106.998 85.1236L109.402 82.6842L106.998 80.2448Z" fill="#DAD9D4" />
          <path d="M107.022 68.9968L105.216 70.8296L107.022 72.6624L108.828 70.8296L107.022 68.9968Z" fill="#DAD9D4" />
          <path d="M95.0053 136.563L89.6006 142.048L95.0053 147.533L100.41 142.048L95.0053 136.563Z" fill="#84827C" />
          <path d="M94.9972 125.309L90.2031 130.175L94.9972 135.04L99.7913 130.175L94.9972 125.309Z" fill="#84827C" />
          <path d="M94.9894 114.048L90.793 118.307L94.9894 122.566L99.1859 118.307L94.9894 114.048Z" fill="#84827C" />
          <path d="M94.9953 102.781L91.3965 106.434L94.9953 110.086L98.5941 106.434L94.9953 102.781Z" fill="#DAD9D4" />
          <path d="M95.0002 55.8662L91.999 58.9121L95.0002 61.958L98.0014 58.9121L95.0002 55.8662Z" fill="#DAD9D4" />
          <path d="M119.018 91.5295L116.017 94.5754L119.018 97.6214L122.019 94.5754L119.018 91.5295Z" fill="#84827C" />
          <path d="M119.01 80.2496L116.606 82.689L119.01 85.1283L121.414 82.689L119.01 80.2496Z" fill="#84827C" />
          <path d="M119.015 69.0016L117.209 70.8345L119.015 72.6673L120.821 70.8345L119.015 69.0016Z" fill="#84827C" />
          <path d="M94.9924 44.5863L92.5889 47.0256L94.9924 49.465L97.3959 47.0256L94.9924 44.5863Z" fill="#DAD9D4" />
          <path d="M95.01 33.325L93.2041 35.1578L95.01 36.9907L96.8159 35.1578L95.01 33.325Z" fill="#DAD9D4" />
          <path d="M107.006 147.829L101.004 153.921L107.006 160.012L113.009 153.921L107.006 147.829Z" fill="#84827C" />
          <path d="M106.998 136.549L101.594 142.034L106.998 147.519L112.403 142.034L106.998 136.549Z" fill="#84827C" />
          <path d="M106.99 125.314L102.196 130.179L106.99 135.045L111.784 130.179L106.99 125.314Z" fill="#DAD9D4" />
          <path d="M131.011 91.5157L128.01 94.5616L131.011 97.6076L134.012 94.5616L131.011 91.5157Z" fill="#DAD9D4" />
          <path d="M131.003 80.2545L128.6 82.6938L131.003 85.1332L133.407 82.6938L131.003 80.2545Z" fill="#DAD9D4" />
          <path d="M131.008 68.9877L129.202 70.8206L131.008 72.6534L132.814 70.8206L131.008 68.9877Z" fill="#DAD9D4" />
          <path d="M106.983 114.053L102.786 118.312L106.983 122.571L111.179 118.312L106.983 114.053Z" fill="#DAD9D4" />
          <path d="M106.988 102.786L103.39 106.438L106.988 110.091L110.587 106.438L106.988 102.786Z" fill="#DAD9D4" />
          <path d="M106.993 55.8711L103.992 58.917L106.993 61.9629L109.995 58.917L106.993 55.8711Z" fill="#DAD9D4" />
          <path d="M106.998 44.578L104.595 47.0173L106.998 49.4567L109.402 47.0173L106.998 44.578Z" fill="#DAD9D4" />
          <path d="M107.022 33.3299L105.216 35.1627L107.022 36.9955L108.828 35.1627L107.022 33.3299Z" fill="#DAD9D4" />
          <path d="M143.004 91.5205L140.003 94.5664L143.004 97.6123L146.005 94.5664L143.004 91.5205Z" fill="#DAD9D4" />
          <path d="M142.996 80.2594L140.593 82.6987L142.996 85.1381L145.4 82.6987L142.996 80.2594Z" fill="#DAD9D4" />
          <path d="M143.001 68.9926L141.195 70.8254L143.001 72.6583L144.807 70.8254L143.001 68.9926Z" fill="#DAD9D4" />
          <path d="M118.999 147.833L112.997 153.925L118.999 160.017L125.002 153.925L118.999 147.833Z" fill="#84827C" />
          <path d="M118.992 136.554L113.587 142.039L118.992 147.524L124.396 142.039L118.992 136.554Z" fill="#84827C" />
          <path d="M118.984 125.319L114.189 130.184L118.984 135.05L123.778 130.184L118.984 125.319Z" fill="#84827C" />
          <path d="M118.976 114.039L114.779 118.298L118.976 122.557L123.172 118.298L118.976 114.039Z" fill="#84827C" />
          <path d="M118.999 102.791L115.4 106.443L118.999 110.096L122.598 106.443L118.999 102.791Z" fill="#84827C" />
          <path d="M154.997 91.5254L151.996 94.5713L154.997 97.6172L157.998 94.5713L154.997 91.5254Z" fill="#DAD9D4" />
          <path d="M155.008 80.2454L152.604 82.6848L155.008 85.1242L157.412 82.6848L155.008 80.2454Z" fill="#DAD9D4" />
          <path d="M155.013 68.9975L153.207 70.8303L155.013 72.6631L156.819 70.8303L155.013 68.9975Z" fill="#DAD9D4" />
          <path d="M119.018 55.8626L116.017 58.9086L119.018 61.9545L122.019 58.9086L119.018 55.8626Z" fill="#84827C" />
          <path d="M119.01 44.5828L116.606 47.0222L119.01 49.4616L121.414 47.0222L119.01 44.5828Z" fill="#84827C" />
          <path d="M119.015 33.3347L117.209 35.1675L119.015 37.0003L120.821 35.1675L119.015 33.3347Z" fill="#84827C" />
          <path d="M130.993 147.82L124.99 153.912L130.993 160.003L136.995 153.912L130.993 147.82Z" fill="#84827C" />
          <path d="M130.985 136.558L125.58 142.044L130.985 147.529L136.389 142.044L130.985 136.558Z" fill="#84827C" />
          <path d="M130.995 125.324L126.201 130.189L130.995 135.055L135.789 130.189L130.995 125.324Z" fill="#84827C" />
          <path d="M130.987 114.044L126.791 118.303L130.987 122.562L135.184 118.303L130.987 114.044Z" fill="#84827C" />
          <path d="M131.006 102.782L127.407 106.435L131.006 110.087L134.605 106.435L131.006 102.782Z" fill="#84827C" />
          <path d="M131.011 55.8489L128.01 58.8948L131.011 61.9407L134.012 58.8948L131.011 55.8489Z" fill="#DAD9D4" />
          <path d="M131.003 44.5876L128.6 47.027L131.003 49.4664L133.407 47.027L131.003 44.5876Z" fill="#DAD9D4" />
          <path d="M131.008 33.321L129.202 35.1538L131.008 36.9866L132.814 35.1538L131.008 33.321Z" fill="#DAD9D4" />
          <path d="M143.004 147.825L137.002 153.916L143.004 160.008L149.007 153.916L143.004 147.825Z" fill="#84827C" />
          <path d="M142.997 136.563L137.592 142.049L142.997 147.534L148.401 142.049L142.997 136.563Z" fill="#84827C" />
          <path d="M142.988 125.31L138.194 130.175L142.988 135.041L147.783 130.175L142.988 125.31Z" fill="#84827C" />
          <path d="M142.994 114.035L138.798 118.294L142.994 122.553L147.191 118.294L142.994 114.035Z" fill="#DAD9D4" />
          <path d="M142.999 102.787L139.4 106.44L142.999 110.092L146.598 106.44L142.999 102.787Z" fill="#DAD9D4" />
          <path d="M143.004 55.8537L140.003 58.8997L143.004 61.9456L146.005 58.8997L143.004 55.8537Z" fill="#DAD9D4" />
          <path d="M142.996 44.5924L140.593 47.0317L142.996 49.4711L145.4 47.0317L142.996 44.5924Z" fill="#DAD9D4" />
          <path d="M143.001 33.3257L141.195 35.1586L143.001 36.9914L144.807 35.1586L143.001 33.3257Z" fill="#DAD9D4" />
          <path d="M154.997 147.829L148.995 153.921L154.997 160.013L161 153.921L154.997 147.829Z" fill="#84827C" />
          <path d="M154.99 136.568L149.585 142.053L154.99 147.539L160.394 142.053L154.99 136.568Z" fill="#DAD9D4" />
          <path d="M154.995 125.301L150.201 130.167L154.995 135.033L159.789 130.167L154.995 125.301Z" fill="#DAD9D4" />
          <path d="M154.987 114.04L150.791 118.299L154.987 122.558L159.184 118.299L154.987 114.04Z" fill="#DAD9D4" />
          <path d="M154.992 102.773L151.394 106.426L154.992 110.078L158.591 106.426L154.992 102.773Z" fill="#DAD9D4" />
          <path d="M154.997 55.8585L151.996 58.9044L154.997 61.9503L157.998 58.9044L154.997 55.8585Z" fill="#DAD9D4" />
          <path d="M155.008 44.5787L152.604 47.0181L155.008 49.4574L157.412 47.0181L155.008 44.5787Z" fill="#DAD9D4" />
          <path d="M155.013 33.3305L153.207 35.1633L155.013 36.9962L156.819 35.1633L155.013 33.3305Z" fill="#DAD9D4" />
          <path d="M167.015 147.828L161.013 153.92L167.015 160.012L173.017 153.92L167.015 147.828Z" fill="#84827C" />
          <path d="M167.007 136.548L161.603 142.033L167.007 147.519L172.412 142.033L167.007 136.548Z" fill="#DAD9D4" />
          <path d="M166.999 125.313L162.205 130.179L166.999 135.044L171.793 130.179L166.999 125.313Z" fill="#DAD9D4" />
          <path d="M166.991 114.033L162.795 118.292L166.991 122.551L171.188 118.292L166.991 114.033Z" fill="#DAD9D4" />
          <path d="M166.997 102.785L163.398 106.438L166.997 110.09L170.596 106.438L166.997 102.785Z" fill="#DAD9D4" />
          <path d="M167.002 91.5185L164.001 94.5645L167.002 97.6104L170.003 94.5645L167.002 91.5185Z" fill="#DAD9D4" />
          <path d="M166.994 80.2573L164.591 82.6967L166.994 85.136L169.398 82.6967L166.994 80.2573Z" fill="#DAD9D4" />
          <path d="M166.999 69.0092L165.193 70.842L166.999 72.6749L168.805 70.842L166.999 69.0092Z" fill="#DAD9D4" />
          <path d="M167.002 55.8517L164.001 58.8976L167.002 61.9435L170.003 58.8976L167.002 55.8517Z" fill="#DAD9D4" />
          <path d="M166.994 44.5904L164.591 47.0298L166.994 49.4692L169.398 47.0298L166.994 44.5904Z" fill="#DAD9D4" />
          <path d="M166.999 33.3423L165.193 35.1752L166.999 37.008L168.805 35.1752L166.999 33.3423Z" fill="#DAD9D4" />
          <path d="M179.008 147.814L173.006 153.906L179.008 159.998L185.011 153.906L179.008 147.814Z" fill="#84827C" />
          <path d="M179 136.553L173.596 142.038L179 147.524L184.405 142.038L179 136.553Z" fill="#84827C" />
          <path d="M178.995 91.5234L175.994 94.5693L178.995 97.6153L181.996 94.5693L178.995 91.5234Z" fill="#DAD9D4" />
          <path d="M179.006 80.262L176.603 82.7014L179.006 85.1408L181.41 82.7014L179.006 80.262Z" fill="#DAD9D4" />
          <path d="M179.011 68.9954L177.205 70.8282L179.011 72.6611L180.817 70.8282L179.011 68.9954Z" fill="#DAD9D4" />
          <path d="M178.992 125.318L174.198 130.184L178.992 135.049L183.786 130.184L178.992 125.318Z" fill="#84827C" />
          <path d="M178.985 114.038L174.788 118.297L178.985 122.556L183.181 118.297L178.985 114.038Z" fill="#DAD9D4" />
          <path d="M178.99 102.79L175.392 106.443L178.99 110.095L182.589 106.443L178.99 102.79Z" fill="#DAD9D4" />
          <path d="M178.995 55.8564L175.994 58.9023L178.995 61.9483L181.996 58.9023L178.995 55.8564Z" fill="#DAD9D4" />
          <path d="M179.006 44.5953L176.603 47.0347L179.006 49.474L181.41 47.0347L179.006 44.5953Z" fill="#DAD9D4" />
          <path d="M191.007 91.5283L188.006 94.5742L191.007 97.6201L194.008 94.5742L191.007 91.5283Z" fill="#84827C" />
          <path d="M190.999 80.2669L188.596 82.7063L190.999 85.1457L193.403 82.7063L190.999 80.2669Z" fill="#84827C" />
          <path d="M191.004 69.0002L189.198 70.833L191.004 72.6658L192.81 70.833L191.004 69.0002Z" fill="#84827C" />
          <path d="M179.011 33.3286L177.205 35.1614L179.011 36.9942L180.817 35.1614L179.011 33.3286Z" fill="#DAD9D4" />
          <path d="M191.001 147.819L184.999 153.911L191.001 160.003L197.004 153.911L191.001 147.819Z" fill="#84827C" />
          <path d="M190.994 136.558L185.589 142.043L190.994 147.528L196.398 142.043L190.994 136.558Z" fill="#84827C" />
          <path d="M190.986 125.304L186.192 130.17L190.986 135.035L195.781 130.17L190.986 125.304Z" fill="#84827C" />
          <path d="M190.996 114.043L186.8 118.302L190.996 122.561L195.193 118.302L190.996 114.043Z" fill="#84827C" />
          <path d="M203 91.5331L199.999 94.579L203 97.6249L206.001 94.579L203 91.5331Z" fill="#DAD9D4" />
          <path d="M202.992 80.2531L200.589 82.6925L202.992 85.1319L205.396 82.6925L202.992 80.2531Z" fill="#DAD9D4" />
          <path d="M203.01 68.9919L201.204 70.8247L203.01 72.6575L204.816 70.8247L203.01 68.9919Z" fill="#DAD9D4" />
          <path d="M191.002 102.795L187.403 106.447L191.002 110.1L194.601 106.447L191.002 102.795Z" fill="#84827C" />
          <path d="M191.007 55.8613L188.006 58.9072L191.007 61.9531L194.008 58.9072L191.007 55.8613Z" fill="#84827C" />
          <path d="M190.999 44.6002L188.596 47.0396L190.999 49.4789L193.403 47.0396L190.999 44.6002Z" fill="#84827C" />
          <path d="M191.004 33.3334L189.198 35.1663L191.004 36.9991L192.81 35.1663L191.004 33.3334Z" fill="#84827C" />
          <path d="M203.013 147.824L197.011 153.916L203.013 160.008L209.015 153.916L203.013 147.824Z" fill="#84827C" />
          <path d="M214.993 91.5378L211.992 94.5837L214.993 97.6297L217.995 94.5837L214.993 91.5378Z" fill="#DAD9D4" />
          <path d="M214.998 80.2448L212.595 82.6842L214.998 85.1236L217.402 82.6842L214.998 80.2448Z" fill="#DAD9D4" />
          <path d="M215.022 68.9968L213.216 70.8296L215.022 72.6624L216.828 70.8296L215.022 68.9968Z" fill="#DAD9D4" />
          <path d="M203.005 136.563L197.601 142.048L203.005 147.533L208.41 142.048L203.005 136.563Z" fill="#84827C" />
          <path d="M202.997 125.309L198.203 130.175L202.997 135.04L207.791 130.175L202.997 125.309Z" fill="#84827C" />
          <path d="M202.989 114.048L198.793 118.307L202.989 122.566L207.186 118.307L202.989 114.048Z" fill="#84827C" />
          <path d="M202.995 102.781L199.396 106.434L202.995 110.086L206.594 106.434L202.995 102.781Z" fill="#DAD9D4" />
          <path d="M203 55.8662L199.999 58.9121L203 61.958L206.001 58.9121L203 55.8662Z" fill="#DAD9D4" />
          <path d="M227.018 91.5295L224.017 94.5754L227.018 97.6214L230.019 94.5754L227.018 91.5295Z" fill="#84827C" />
          <path d="M227.01 80.2496L224.606 82.689L227.01 85.1283L229.414 82.689L227.01 80.2496Z" fill="#84827C" />
          <path d="M227.015 69.0016L225.209 70.8345L227.015 72.6673L228.821 70.8345L227.015 69.0016Z" fill="#84827C" />
          <path d="M202.992 44.5863L200.589 47.0256L202.992 49.465L205.396 47.0256L202.992 44.5863Z" fill="#DAD9D4" />
          <path d="M203.01 33.325L201.204 35.1578L203.01 36.9907L204.816 35.1578L203.01 33.325Z" fill="#DAD9D4" />
          <path d="M215.006 147.829L209.004 153.921L215.006 160.012L221.009 153.921L215.006 147.829Z" fill="#84827C" />
          <path d="M214.998 136.549L209.594 142.034L214.998 147.519L220.403 142.034L214.998 136.549Z" fill="#84827C" />
          <path d="M214.99 125.314L210.196 130.179L214.99 135.045L219.784 130.179L214.99 125.314Z" fill="#DAD9D4" />
          <path d="M239.011 91.5157L236.01 94.5616L239.011 97.6076L242.012 94.5616L239.011 91.5157Z" fill="#DAD9D4" />
          <path d="M239.003 80.2545L236.6 82.6938L239.003 85.1332L241.407 82.6938L239.003 80.2545Z" fill="#DAD9D4" />
          <path d="M239.008 68.9877L237.202 70.8206L239.008 72.6534L240.814 70.8206L239.008 68.9877Z" fill="#DAD9D4" />
          <path d="M214.983 114.053L210.786 118.312L214.983 122.571L219.179 118.312L214.983 114.053Z" fill="#DAD9D4" />
          <path d="M214.988 102.786L211.39 106.438L214.988 110.091L218.587 106.438L214.988 102.786Z" fill="#DAD9D4" />
          <path d="M214.993 55.8711L211.992 58.917L214.993 61.9629L217.995 58.917L214.993 55.8711Z" fill="#DAD9D4" />
          <path d="M214.998 44.578L212.595 47.0173L214.998 49.4567L217.402 47.0173L214.998 44.578Z" fill="#DAD9D4" />
          <path d="M215.022 33.3299L213.216 35.1627L215.022 36.9955L216.828 35.1627L215.022 33.3299Z" fill="#DAD9D4" />
          <path d="M251.004 91.5205L248.003 94.5664L251.004 97.6123L254.005 94.5664L251.004 91.5205Z" fill="#DAD9D4" />
          <path d="M250.996 80.2594L248.593 82.6987L250.996 85.1381L253.4 82.6987L250.996 80.2594Z" fill="#DAD9D4" />
          <path d="M251.001 68.9926L249.195 70.8254L251.001 72.6583L252.807 70.8254L251.001 68.9926Z" fill="#DAD9D4" />
          <path d="M226.999 147.833L220.997 153.925L226.999 160.017L233.002 153.925L226.999 147.833Z" fill="#84827C" />
          <path d="M226.992 136.554L221.587 142.039L226.992 147.524L232.396 142.039L226.992 136.554Z" fill="#84827C" />
          <path d="M226.984 125.319L222.189 130.184L226.984 135.05L231.778 130.184L226.984 125.319Z" fill="#84827C" />
          <path d="M226.976 114.039L222.779 118.298L226.976 122.557L231.172 118.298L226.976 114.039Z" fill="#84827C" />
          <path d="M226.999 102.791L223.4 106.443L226.999 110.096L230.598 106.443L226.999 102.791Z" fill="#84827C" />
          <path d="M262.997 91.5254L259.996 94.5713L262.997 97.6172L265.998 94.5713L262.997 91.5254Z" fill="#DAD9D4" />
          <path d="M263.008 80.2454L260.604 82.6848L263.008 85.1242L265.412 82.6848L263.008 80.2454Z" fill="#DAD9D4" />
          <path d="M263.013 68.9975L261.207 70.8303L263.013 72.6631L264.819 70.8303L263.013 68.9975Z" fill="#DAD9D4" />
          <path d="M227.018 55.8626L224.017 58.9086L227.018 61.9545L230.019 58.9086L227.018 55.8626Z" fill="#84827C" />
          <path d="M227.01 44.5828L224.606 47.0222L227.01 49.4616L229.414 47.0222L227.01 44.5828Z" fill="#84827C" />
          <path d="M227.015 33.3347L225.209 35.1675L227.015 37.0003L228.821 35.1675L227.015 33.3347Z" fill="#84827C" />
          <path d="M238.993 147.82L232.99 153.912L238.993 160.003L244.995 153.912L238.993 147.82Z" fill="#84827C" />
          <path d="M238.985 136.558L233.58 142.044L238.985 147.529L244.389 142.044L238.985 136.558Z" fill="#84827C" />
          <path d="M238.995 125.324L234.201 130.189L238.995 135.055L243.789 130.189L238.995 125.324Z" fill="#84827C" />
          <path d="M238.987 114.044L234.791 118.303L238.987 122.562L243.184 118.303L238.987 114.044Z" fill="#84827C" />
          <path d="M239.006 102.782L235.407 106.435L239.006 110.087L242.605 106.435L239.006 102.782Z" fill="#84827C" />
          <path d="M239.011 55.8489L236.01 58.8948L239.011 61.9407L242.012 58.8948L239.011 55.8489Z" fill="#DAD9D4" />
          <path d="M239.003 44.5876L236.6 47.027L239.003 49.4664L241.407 47.027L239.003 44.5876Z" fill="#DAD9D4" />
          <path d="M239.008 33.321L237.202 35.1538L239.008 36.9866L240.814 35.1538L239.008 33.321Z" fill="#DAD9D4" />
          <path d="M251.004 147.825L245.002 153.916L251.004 160.008L257.007 153.916L251.004 147.825Z" fill="#84827C" />
          <path d="M250.997 136.563L245.592 142.049L250.997 147.534L256.401 142.049L250.997 136.563Z" fill="#84827C" />
          <path d="M250.988 125.31L246.194 130.175L250.988 135.041L255.783 130.175L250.988 125.31Z" fill="#84827C" />
          <path d="M250.994 114.035L246.798 118.294L250.994 122.553L255.191 118.294L250.994 114.035Z" fill="#DAD9D4" />
          <path d="M250.999 102.787L247.4 106.44L250.999 110.092L254.598 106.44L250.999 102.787Z" fill="#DAD9D4" />
          <path d="M251.004 55.8537L248.003 58.8997L251.004 61.9456L254.005 58.8997L251.004 55.8537Z" fill="#DAD9D4" />
          <path d="M250.996 44.5924L248.593 47.0317L250.996 49.4711L253.4 47.0317L250.996 44.5924Z" fill="#DAD9D4" />
          <path d="M251.001 33.3257L249.195 35.1586L251.001 36.9914L252.807 35.1586L251.001 33.3257Z" fill="#DAD9D4" />
          <path d="M262.997 147.829L256.995 153.921L262.997 160.013L269 153.921L262.997 147.829Z" fill="#84827C" />
          <path d="M262.99 136.568L257.585 142.053L262.99 147.539L268.394 142.053L262.99 136.568Z" fill="#DAD9D4" />
          <path d="M262.995 125.301L258.201 130.167L262.995 135.033L267.789 130.167L262.995 125.301Z" fill="#DAD9D4" />
          <path d="M262.987 114.04L258.791 118.299L262.987 122.558L267.184 118.299L262.987 114.04Z" fill="#DAD9D4" />
          <path d="M262.992 102.773L259.394 106.426L262.992 110.078L266.591 106.426L262.992 102.773Z" fill="#DAD9D4" />
          <path d="M262.997 55.8585L259.996 58.9044L262.997 61.9503L265.998 58.9044L262.997 55.8585Z" fill="#DAD9D4" />
          <path d="M263.008 44.5787L260.604 47.0181L263.008 49.4574L265.412 47.0181L263.008 44.5787Z" fill="#DAD9D4" />
          <path d="M263.013 33.3305L261.207 35.1633L263.013 36.9962L264.819 35.1633L263.013 33.3305Z" fill="#DAD9D4" />
          <path d="M275.015 147.828L269.013 153.92L275.015 160.012L281.017 153.92L275.015 147.828Z" fill="#84827C" />
          <path d="M275.007 136.548L269.603 142.033L275.007 147.519L280.412 142.033L275.007 136.548Z" fill="#DAD9D4" />
          <path d="M274.999 125.313L270.205 130.179L274.999 135.044L279.793 130.179L274.999 125.313Z" fill="#DAD9D4" />
          <path d="M274.991 114.033L270.795 118.292L274.991 122.551L279.188 118.292L274.991 114.033Z" fill="#DAD9D4" />
          <path d="M274.997 102.785L271.398 106.438L274.997 110.09L278.596 106.438L274.997 102.785Z" fill="#DAD9D4" />
          <path d="M275.002 91.5185L272.001 94.5645L275.002 97.6104L278.003 94.5645L275.002 91.5185Z" fill="#DAD9D4" />
          <path d="M274.994 80.2573L272.591 82.6967L274.994 85.136L277.398 82.6967L274.994 80.2573Z" fill="#DAD9D4" />
          <path d="M274.999 69.0092L273.193 70.842L274.999 72.6749L276.805 70.842L274.999 69.0092Z" fill="#DAD9D4" />
          <path d="M275.002 55.8517L272.001 58.8976L275.002 61.9435L278.003 58.8976L275.002 55.8517Z" fill="#DAD9D4" />
          <path d="M274.994 44.5904L272.591 47.0298L274.994 49.4692L277.398 47.0298L274.994 44.5904Z" fill="#DAD9D4" />
          <path d="M274.999 33.3423L273.193 35.1752L274.999 37.008L276.805 35.1752L274.999 33.3423Z" fill="#DAD9D4" />
          <path d="M287.008 147.814L281.006 153.906L287.008 159.998L293.011 153.906L287.008 147.814Z" fill="#84827C" />
          <path d="M287 136.553L281.596 142.038L287 147.524L292.405 142.038L287 136.553Z" fill="#84827C" />
          <path d="M286.995 91.5234L283.994 94.5693L286.995 97.6153L289.996 94.5693L286.995 91.5234Z" fill="#DAD9D4" />
          <path d="M287.006 80.262L284.603 82.7014L287.006 85.1408L289.41 82.7014L287.006 80.262Z" fill="#DAD9D4" />
          <path d="M287.011 68.9954L285.205 70.8282L287.011 72.6611L288.817 70.8282L287.011 68.9954Z" fill="#DAD9D4" />
          <path d="M286.992 125.318L282.198 130.184L286.992 135.049L291.786 130.184L286.992 125.318Z" fill="#84827C" />
          <path d="M286.985 114.038L282.788 118.297L286.985 122.556L291.181 118.297L286.985 114.038Z" fill="#DAD9D4" />
          <path d="M286.99 102.79L283.392 106.443L286.99 110.095L290.589 106.443L286.99 102.79Z" fill="#DAD9D4" />
          <path d="M286.995 55.8564L283.994 58.9023L286.995 61.9483L289.996 58.9023L286.995 55.8564Z" fill="#DAD9D4" />
          <path d="M287.006 44.5953L284.603 47.0347L287.006 49.474L289.41 47.0347L287.006 44.5953Z" fill="#DAD9D4" />
          <path d="M299.007 91.5283L296.006 94.5742L299.007 97.6201L302.008 94.5742L299.007 91.5283Z" fill="#84827C" />
          <path d="M298.999 80.2669L296.596 82.7063L298.999 85.1457L301.403 82.7063L298.999 80.2669Z" fill="#84827C" />
          <path d="M299.004 69.0002L297.198 70.833L299.004 72.6658L300.81 70.833L299.004 69.0002Z" fill="#84827C" />
          <path d="M287.011 33.3286L285.205 35.1614L287.011 36.9942L288.817 35.1614L287.011 33.3286Z" fill="#DAD9D4" />
          <path d="M299.001 147.819L292.999 153.911L299.001 160.003L305.004 153.911L299.001 147.819Z" fill="#84827C" />
          <path d="M298.994 136.558L293.589 142.043L298.994 147.528L304.398 142.043L298.994 136.558Z" fill="#84827C" />
          <path d="M298.986 125.304L294.192 130.17L298.986 135.035L303.781 130.17L298.986 125.304Z" fill="#84827C" />
          <path d="M298.996 114.043L294.8 118.302L298.996 122.561L303.193 118.302L298.996 114.043Z" fill="#84827C" />
          <path d="M311 91.5331L307.999 94.579L311 97.6249L314.001 94.579L311 91.5331Z" fill="#DAD9D4" />
          <path d="M310.992 80.2531L308.589 82.6925L310.992 85.1319L313.396 82.6925L310.992 80.2531Z" fill="#DAD9D4" />
          <path d="M311.01 68.9919L309.204 70.8247L311.01 72.6575L312.816 70.8247L311.01 68.9919Z" fill="#DAD9D4" />
          <path d="M299.002 102.795L295.403 106.447L299.002 110.1L302.601 106.447L299.002 102.795Z" fill="#84827C" />
          <path d="M299.007 55.8613L296.006 58.9072L299.007 61.9531L302.008 58.9072L299.007 55.8613Z" fill="#84827C" />
          <path d="M298.999 44.6002L296.596 47.0396L298.999 49.4789L301.403 47.0396L298.999 44.6002Z" fill="#84827C" />
          <path d="M299.004 33.3334L297.198 35.1663L299.004 36.9991L300.81 35.1663L299.004 33.3334Z" fill="#84827C" />
          <path d="M311.013 147.824L305.011 153.916L311.013 160.008L317.015 153.916L311.013 147.824Z" fill="#84827C" />
          <path d="M322.993 91.5378L319.992 94.5837L322.993 97.6297L325.995 94.5837L322.993 91.5378Z" fill="#DAD9D4" />
          <path d="M322.998 80.2448L320.595 82.6842L322.998 85.1236L325.402 82.6842L322.998 80.2448Z" fill="#DAD9D4" />
          <path d="M323.022 68.9968L321.216 70.8296L323.022 72.6624L324.828 70.8296L323.022 68.9968Z" fill="#DAD9D4" />
          <path d="M311.005 136.563L305.601 142.048L311.005 147.533L316.41 142.048L311.005 136.563Z" fill="#84827C" />
          <path d="M310.997 125.309L306.203 130.175L310.997 135.04L315.791 130.175L310.997 125.309Z" fill="#84827C" />
          <path d="M310.989 114.048L306.793 118.307L310.989 122.566L315.186 118.307L310.989 114.048Z" fill="#84827C" />
          <path d="M310.995 102.781L307.396 106.434L310.995 110.086L314.594 106.434L310.995 102.781Z" fill="#DAD9D4" />
          <path d="M311 55.8662L307.999 58.9121L311 61.958L314.001 58.9121L311 55.8662Z" fill="#DAD9D4" />
          <path d="M335.018 91.5295L332.017 94.5754L335.018 97.6214L338.019 94.5754L335.018 91.5295Z" fill="#84827C" />
          <path d="M335.01 80.2496L332.606 82.689L335.01 85.1283L337.414 82.689L335.01 80.2496Z" fill="#84827C" />
          <path d="M335.015 69.0016L333.209 70.8345L335.015 72.6673L336.821 70.8345L335.015 69.0016Z" fill="#84827C" />
          <path d="M310.992 44.5863L308.589 47.0256L310.992 49.465L313.396 47.0256L310.992 44.5863Z" fill="#DAD9D4" />
          <path d="M311.01 33.325L309.204 35.1578L311.01 36.9907L312.816 35.1578L311.01 33.325Z" fill="#DAD9D4" />
          <path d="M323.006 147.829L317.004 153.921L323.006 160.012L329.009 153.921L323.006 147.829Z" fill="#84827C" />
          <path d="M322.998 136.549L317.594 142.034L322.998 147.519L328.403 142.034L322.998 136.549Z" fill="#84827C" />
          <path d="M322.99 125.314L318.196 130.179L322.99 135.045L327.784 130.179L322.99 125.314Z" fill="#DAD9D4" />
          <path d="M347.011 91.5157L344.01 94.5616L347.011 97.6076L350.012 94.5616L347.011 91.5157Z" fill="#DAD9D4" />
          <path d="M347.003 80.2545L344.6 82.6938L347.003 85.1332L349.407 82.6938L347.003 80.2545Z" fill="#DAD9D4" />
          <path d="M347.008 68.9877L345.202 70.8206L347.008 72.6534L348.814 70.8206L347.008 68.9877Z" fill="#DAD9D4" />
          <path d="M322.983 114.053L318.786 118.312L322.983 122.571L327.179 118.312L322.983 114.053Z" fill="#DAD9D4" />
          <path d="M322.988 102.786L319.39 106.438L322.988 110.091L326.587 106.438L322.988 102.786Z" fill="#DAD9D4" />
          <path d="M322.993 55.8711L319.992 58.917L322.993 61.9629L325.995 58.917L322.993 55.8711Z" fill="#DAD9D4" />
          <path d="M322.998 44.578L320.595 47.0173L322.998 49.4567L325.402 47.0173L322.998 44.578Z" fill="#DAD9D4" />
          <path d="M323.022 33.3299L321.216 35.1627L323.022 36.9955L324.828 35.1627L323.022 33.3299Z" fill="#DAD9D4" />
          <path d="M359.004 91.5205L356.003 94.5664L359.004 97.6123L362.005 94.5664L359.004 91.5205Z" fill="#DAD9D4" />
          <path d="M358.996 80.2594L356.593 82.6987L358.996 85.1381L361.4 82.6987L358.996 80.2594Z" fill="#DAD9D4" />
          <path d="M359.001 68.9926L357.195 70.8254L359.001 72.6583L360.807 70.8254L359.001 68.9926Z" fill="#DAD9D4" />
          <path d="M334.999 147.833L328.997 153.925L334.999 160.017L341.002 153.925L334.999 147.833Z" fill="#84827C" />
          <path d="M334.992 136.554L329.587 142.039L334.992 147.524L340.396 142.039L334.992 136.554Z" fill="#84827C" />
          <path d="M334.984 125.319L330.189 130.184L334.984 135.05L339.778 130.184L334.984 125.319Z" fill="#84827C" />
          <path d="M334.976 114.039L330.779 118.298L334.976 122.557L339.172 118.298L334.976 114.039Z" fill="#84827C" />
          <path d="M334.999 102.791L331.4 106.443L334.999 110.096L338.598 106.443L334.999 102.791Z" fill="#84827C" />
          <path d="M370.997 91.5254L367.996 94.5713L370.997 97.6172L373.998 94.5713L370.997 91.5254Z" fill="#DAD9D4" />
          <path d="M371.008 80.2454L368.604 82.6848L371.008 85.1242L373.412 82.6848L371.008 80.2454Z" fill="#DAD9D4" />
          <path d="M371.013 68.9975L369.207 70.8303L371.013 72.6631L372.819 70.8303L371.013 68.9975Z" fill="#DAD9D4" />
          <path d="M335.018 55.8626L332.017 58.9086L335.018 61.9545L338.019 58.9086L335.018 55.8626Z" fill="#84827C" />
          <path d="M335.01 44.5828L332.606 47.0222L335.01 49.4616L337.414 47.0222L335.01 44.5828Z" fill="#84827C" />
          <path d="M335.015 33.3347L333.209 35.1675L335.015 37.0003L336.821 35.1675L335.015 33.3347Z" fill="#84827C" />
          <path d="M346.993 147.82L340.99 153.912L346.993 160.003L352.995 153.912L346.993 147.82Z" fill="#84827C" />
          <path d="M346.985 136.558L341.58 142.044L346.985 147.529L352.389 142.044L346.985 136.558Z" fill="#84827C" />
          <path d="M346.995 125.324L342.201 130.189L346.995 135.055L351.789 130.189L346.995 125.324Z" fill="#84827C" />
          <path d="M346.987 114.044L342.791 118.303L346.987 122.562L351.184 118.303L346.987 114.044Z" fill="#84827C" />
          <path d="M347.006 102.782L343.407 106.435L347.006 110.087L350.605 106.435L347.006 102.782Z" fill="#84827C" />
          <path d="M347.011 55.8489L344.01 58.8948L347.011 61.9407L350.012 58.8948L347.011 55.8489Z" fill="#DAD9D4" />
          <path d="M347.003 44.5876L344.6 47.027L347.003 49.4664L349.407 47.027L347.003 44.5876Z" fill="#DAD9D4" />
          <path d="M347.008 33.321L345.202 35.1538L347.008 36.9866L348.814 35.1538L347.008 33.321Z" fill="#DAD9D4" />
          <path d="M359.004 147.825L353.002 153.916L359.004 160.008L365.007 153.916L359.004 147.825Z" fill="#84827C" />
          <path d="M358.997 136.563L353.592 142.049L358.997 147.534L364.401 142.049L358.997 136.563Z" fill="#84827C" />
          <path d="M358.988 125.31L354.194 130.175L358.988 135.041L363.783 130.175L358.988 125.31Z" fill="#84827C" />
          <path d="M358.994 114.035L354.798 118.294L358.994 122.553L363.191 118.294L358.994 114.035Z" fill="#DAD9D4" />
          <path d="M358.999 102.787L355.4 106.44L358.999 110.092L362.598 106.44L358.999 102.787Z" fill="#DAD9D4" />
          <path d="M359.004 55.8537L356.003 58.8997L359.004 61.9456L362.005 58.8997L359.004 55.8537Z" fill="#DAD9D4" />
          <path d="M358.996 44.5924L356.593 47.0317L358.996 49.4711L361.4 47.0317L358.996 44.5924Z" fill="#DAD9D4" />
          <path d="M359.001 33.3257L357.195 35.1586L359.001 36.9914L360.807 35.1586L359.001 33.3257Z" fill="#DAD9D4" />
          <path d="M370.997 147.829L364.995 153.921L370.997 160.013L377 153.921L370.997 147.829Z" fill="#84827C" />
          <path d="M370.99 136.568L365.585 142.053L370.99 147.539L376.394 142.053L370.99 136.568Z" fill="#DAD9D4" />
          <path d="M370.995 125.301L366.201 130.167L370.995 135.033L375.789 130.167L370.995 125.301Z" fill="#DAD9D4" />
          <path d="M370.987 114.04L366.791 118.299L370.987 122.558L375.184 118.299L370.987 114.04Z" fill="#DAD9D4" />
          <path d="M370.992 102.773L367.394 106.426L370.992 110.078L374.591 106.426L370.992 102.773Z" fill="#DAD9D4" />
          <path d="M370.997 55.8585L367.996 58.9044L370.997 61.9503L373.998 58.9044L370.997 55.8585Z" fill="#DAD9D4" />
          <path d="M371.008 44.5787L368.604 47.0181L371.008 49.4574L373.412 47.0181L371.008 44.5787Z" fill="#DAD9D4" />
          <path d="M371.013 33.3305L369.207 35.1633L371.013 36.9962L372.819 35.1633L371.013 33.3305Z" fill="#DAD9D4" />
        </g>
        <defs>
          <clipPath id="clip0_1_935">
            <rect width="430" height="160" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div className="flex justify-between text-sm text-foreground/70">
        <span>0:00:00</span> <span>1:45:00</span>
      </div>

      <div className="stack-content place-items-center">
        <div className="relative h-1 w-full rounded-[2px] bg-foreground" />
        <div className="ml-[20%] h-3 w-3 place-self-start rounded-full bg-foreground" />
      </div>

      <div className="mt-3 flex items-center justify-center gap-x-6">
        <ShuffleIcon />
        <PlayNextIcon />
        <PlayIcon />
        <PlayNextIcon className="rotate-180" />
        <LoopIcon />
      </div>
    </div>
  );
}
